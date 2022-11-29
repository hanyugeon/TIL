export default function PhotoListItem(imagePath) {
  const $photoListItem = document.createElement("li");

  $photoListItem.innerHTML = `
    <img 
      src="${imagePath}"
      width="100%"
    />
  `;

  return;
}
