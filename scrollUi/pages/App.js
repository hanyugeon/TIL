import PhotoList from "../components/PhotoList.js";
import { request } from "../utils/api.js";

export default function App({ $target }) {
  const $header = document.createElement("h1");
  $header.innerHTML = "Cats!";
  $header.style.textAlign = "center";
  $target.appendChild($header);

  this.state = {
    limit: 5,
    start: 0,
    photos: [],
    photosTotalCount: 0,
    isLoading: false,
  };

  this.setState = (nextState) => {
    this.state = nextState;

    photoList.setState({
      photos: nextState.photos,
      photosTotalCount: nextState.photosTotalCount,
      isLoading: nextState.isLoading,
    });
  };

  const photoList = new PhotoList({
    $target: $target,
    initialState: {
      photos: this.state.photos,
      photosTotalCount: this.state.photosTotalCount,
      isLoading: this.state.isLoading,
    },
    onScrollEnded: async () => {
      await fetchPhotos();
    },
  });

  const fetchPhotos = async () => {
    this.setState({
      ...this.state,
      isLoading: true,
    });

    const { limit, start } = this.state;
    const photos = await request(`/cat-photos?_limit=${limit}&_start=${start}`);

    this.setState({
      ...this.state,
      start: start + limit,
      photos: this.state.photos.concat(photos),
      isLoading: false,
    });
  };

  const initialize = async () => {
    this.setState({
      ...this.state,
      photosTotalCount: await request("/cat-photos/count"),
    });

    await fetchPhotos();
  };

  initialize();
}
