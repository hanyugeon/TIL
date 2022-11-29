const DirectoryPreviousNode = () => {
  const $node = document.createElement("div");
  $node.classList.add("Node");

  $node.innerHTML = `
    <img src="https://cdn.roto.codes/images/prev.png"/>
  `;

  return $node;
};

export default DirectoryPreviousNode;
