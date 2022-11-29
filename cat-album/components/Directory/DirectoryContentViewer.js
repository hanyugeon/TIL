import { isStateString } from "../../utils/checkStateValidate.js";
import { compareStates } from "../../utils/compareStates.js";

export default function ImageViewer({ $target, onClose }) {
  const $imageViewer = document.createElement("div");
  $imageViewer.classList.add("ImageViewer", "Modal");
  $target.appendChild($imageViewer);

  this.state = {
    selectedImageUrl: undefined,
    isViewing: false,
  };

  this.setState = (nextState) => {
    if (compareStates(this.state, nextState)) return;
    if (!isStateString(nextState.selectedImageUrl)) return;

    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { selectedImageUrl, isViewing } = this.state;
    $imageViewer.style.display = isViewing ? "block" : "none";

    if (selectedImageUrl) {
      $imageViewer.innerHTML = `
        <div class="content">
          <img src="${selectedImageUrl}"/>
        </div>
      `;
    }
  };

  this.render();

  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") onClose();
  });

  $imageViewer.addEventListener("click", (e) => {
    if (Array.from(e.target.classList).includes("Modal")) {
      onClose();
    }
  });
}
