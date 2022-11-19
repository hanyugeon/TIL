export default function Header({ $target, initialState }) {
  const $header = document.createElement("h1");

  $target.appendChild($header);

  this.state = initialState;

  this.render = () => {
    $header.innerHTML = `${this.state} 님의 할일 목록`;
  };

  this.render();
}
