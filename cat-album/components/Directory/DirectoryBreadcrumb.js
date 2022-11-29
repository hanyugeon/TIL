import { isStateArray } from "../../utils/checkStateValidate.js";
import { compareStates } from "../../utils/compareStates.js";

export default function DirectoryBreadcrumb({ $target, initialState, onBreadcrumbClick }) {
  const $breadcrumb = document.createElement("nav");
  $breadcrumb.classList.add("Breadcrumb");
  $target.appendChild($breadcrumb);

  this.state = initialState;

  this.setState = (nextState) => {
    if (compareStates(this.state, nextState)) return;
    if (!isStateArray(nextState)) return;

    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $breadcrumb.innerHTML = `
       <div class="Breadcrumb_item">Root</div>
       ${this.state
         .map(
           ({ id, name }) => `
             <div class="Breadcrumb_item" data-id="${id}">${name}</div>
           `
         )
         .join("")}
    `;
  };

  this.render();

  $breadcrumb.addEventListener("click", (e) => {
    const $breadcrumbItem = e.target.closest(".Breadcrumb_item");
    if (!$breadcrumbItem) return;

    const { id } = $breadcrumbItem.dataset;

    onBreadcrumbClick(id);
  });
}
