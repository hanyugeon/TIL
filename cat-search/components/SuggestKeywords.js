export default function SuggestKeywords({ $target, initialState, onKeywordSelect }) {
  const $suggest = document.createElement("div");
  $suggest.classList.add("Keywords");
  $target.appendChild($suggest);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };

    this.render();
  };

  this.render = () => {
    const { keywords, cursor } = this.state;
    $suggest.innerHTML = `
      ${keywords
        .map(
          (keyword, i) => `
            <li
              class="${cursor === i ? "active" : ""}"
            >
            ${keyword}
            </li>
          `
        )
        .join("")}
    `;

    $suggest.style.display = keywords.length > 0 ? "block" : "none";
  };

  this.render();

  $suggest.addEventListener("click", (e) => {
    const $li = e.target.closest("li");

    if ($li) {
      onKeywordSelect($li.textContent);
    }
  });

  window.addEventListener("keyup", (e) => {
    const { key } = e;

    if (key === "ArrowUp") {
      const nextCursor = this.state.cursor - 1;
      this.setState({
        ...this.state,
        cursor: nextCursor < 0 ? this.state.keywords.length - 1 : nextCursor,
      });
    }

    if (key === "ArrowDown") {
      const nextCursor = this.state.cursor + 1;
      this.setState({
        ...this.state,
        cursor: nextCursor > this.state.keywords.length - 1 ? 0 : nextCursor,
      });
    }

    if (key === "Enter") {
      onKeywordSelect(this.state.keywords[this.state.cursor]);
    }
  });
}
