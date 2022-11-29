import Keyword from "./Keyword.js";

export default function Header({ $target, initialState, onKeywordInput, onEnter }) {
  const $header = document.createElement("header");
  $header.classList.add("Header");
  $header.style.textAlign = "center";
  $target.appendChild($header);

  const $title = document.createElement("h1");
  $title.innerHTML = "고양이 사진 검색기";
  $header.appendChild($title);

  this.state = initialState;

  this.setState = (nextState) => {
    if (this.state.keyword === nextState.state.keyword) return;

    this.state = nextState;

    keyword.setState({
      keyword: this.state.keyword,
    });
  };

  const keyword = new Keyword({
    $target: $header,
    initialState: {
      keyword: this.state.keyword,
    },
    onKeywordInput: onKeywordInput,
    onEnter: onEnter,
  });
}
