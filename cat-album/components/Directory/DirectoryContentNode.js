import { getStringLowerCase } from "../../utils/utilsString.js";

const DirectoryContentsNode = (node) => {
  const $node = document.createElement("div");
  $node.classList.add("Node");
  $node.setAttribute("data-id", node.id);

  $node.innerHTML = `
    <img src="https://cdn.roto.codes/images/${getStringLowerCase(node.type)}.png"/>
    <span>${node.name}</span>
  `;

  return $node;
};

export default DirectoryContentsNode;
