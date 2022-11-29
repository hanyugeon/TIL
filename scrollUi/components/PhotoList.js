export default function PhotoList({ $target, initialState, onScrollEnded }) {
  const $photoList = document.createElement("ul");
  $target.appendChild($photoList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $photoList.innerHTML = `
      ${this.state.photos
        .map(
          (photo) => `
            <li>
              <img 
                src="${photo.imagePath}"
                width="100%"
              />
            </li>
          `
        )
        .join("")}
    `;
  };

  this.render();

  window.addEventListener("scroll", () => {
    const { photos, photosTotalCount, isLoading } = this.state;
    const isScrollEnded = window.innerHeight + window.scrollY + 100 >= document.body.offsetHeight;
    const isPhotosCountOvered = photos.length >= photosTotalCount;

    if (!isScrollEnded) return;
    if (isLoading) return;
    if (isPhotosCountOvered) return;

    onScrollEnded();
  });
}
