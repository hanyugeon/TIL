import DirectoryBreadcrumb from "../components/Directory/DirectoryBreadCrumb.js";
import DirectoryNodes from "../components/Directory/DirectoryNodes.js";
import DirectoryContentViewer from "../components/Directory/DirectoryContentViewer.js";
import PageLoading from "../components/Common/PageLoading.js";
import { API_END_POINT, request } from "../utils/api.js";

export default function App({ $target }) {
  this.state = {
    nodes: [],
    paths: [],
    isRoot: true,
    isLoading: false,
    isViewing: false,
  };

  const breadcrumb = new DirectoryBreadcrumb({
    $target: $target,
    initialState: this.state.paths,
    onBreadcrumbClick: async (id) => {
      if (id) {
        const nextPaths = id ? [...this.state.paths] : [];
        const pathIndex = nextPaths.findIndex((path) => path.id === id);

        this.setState({
          ...this.state,
          paths: nextPaths.slice(0, pathIndex + 1),
        });
      } else {
        this.setState({
          ...this.state,
          paths: [],
        });
      }
      await fetchNodes(id);
    },
  });

  const nodes = new DirectoryNodes({
    $target: $target,
    initialState: {
      nodes: this.state.nodes,
      selectedImageUrl: undefined,
      isRoot: this.state.isRoot,
      isViewing: this.state.isViewing,
    },
    onPreviousClick: async () => {
      const nextPaths = [...this.state.paths];
      nextPaths.pop();

      this.setState({
        ...this.state,
        paths: nextPaths,
      });

      if (nextPaths.length === 0) {
        await fetchNodes();
      } else {
        await fetchNodes(nextPaths[nextPaths.length - 1].id);
      }
    },
    onNodeClick: async (node) => {
      if (node.type === "DIRECTORY") {
        await fetchNodes(node.id);

        this.setState({
          ...this.state,
          paths: [...this.state.paths, node],
        });
      }
      if (node.type === "FILE") {
        this.setState({
          ...this.state,
          selectedImageUrl: `${API_END_POINT}/static${node.filePath}`,
          isViewing: true,
        });
      }
    },
  });

  const imageViewer = new DirectoryContentViewer({
    $target: $target,
    onClose: () => {
      this.setState({
        ...this.state,
        selectedImageUrl: undefined,
        isViewing: false,
      });
    },
  });

  const pageLoading = new PageLoading({
    $target: $target,
  });

  this.setState = (nextState) => {
    this.state = nextState;

    nodes.setState({
      nodes: this.state.nodes,
      isRoot: this.state.isRoot,
    });

    imageViewer.setState({
      selectedImageUrl: this.state.selectedImageUrl,
      isViewing: this.state.isViewing,
    });

    breadcrumb.setState(this.state.paths);

    pageLoading.setState(this.state.isLoading);
  };

  const fetchNodes = async (id) => {
    this.setState({
      ...this.state,
      isLoading: true,
    });

    const nodes = await request(id ? `/${id}` : "/");

    this.setState({
      ...this.state,
      nodes,
      isRoot: id ? false : true,
      isLoading: false,
    });
  };

  fetchNodes();

  window.addEventListener("keyup", async (e) => {
    const { paths, isLoading, isViewing } = this.state;

    if (paths.length === 0) return;
    if (isLoading === true) return;
    if (isViewing === true) return;

    if (e.key === "Backspace") {
      const nextPaths = [...paths];
      nextPaths.pop();

      this.setState({
        ...this.state,
        paths: nextPaths,
      });

      if (nextPaths.length === 0) {
        await fetchNodes();
      } else {
        await fetchNodes(nextPaths[nextPaths.length - 1].id);
      }
    }
  });
}
