import DirectoryContentsNode from "./DirectoryContentNode.js";
import DirectoryPreviousNode from "./DirectoryPreviousNode.js";
import { isStateArray, isStateBoolean } from "../../utils/checkStateValidate.js";
import { compareStates } from "../../utils/compareStates.js";

export default function DirectoryNodes({ $target, initialState, onPreviousClick, onNodeClick }) {
  const $nodes = document.createElement("div");
  $nodes.classList.add("Nodes");
  $target.appendChild($nodes);

  this.state = initialState;

  this.setState = (nextState) => {
    if (compareStates(this.state, nextState)) return;
    if (!isStateArray(nextState.nodes)) return;
    if (!isStateBoolean(nextState.isRoot)) return;

    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { nodes, isRoot } = this.state;
    $nodes.innerHTML = ``;

    if (!isRoot) {
      $nodes.appendChild(DirectoryPreviousNode());
    }
    if (nodes) {
      nodes
        .map((node) => {
          $nodes.appendChild(DirectoryContentsNode(node));
        })
        .join("");
    }
  };

  this.render();

  $nodes.addEventListener("click", (e) => {
    const $node = e.target.closest(".Node");
    const { id } = $node.dataset;
    if (!id) return onPreviousClick();

    const node = this.state.nodes.find((node) => node.id === id);
    if (node) return onNodeClick(node);
  });
}
