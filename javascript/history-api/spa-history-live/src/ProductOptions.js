export default function ProductOptions({ $target, initialState, onSelect }) {
  const $select = document.createElement("select");

  // $select.setAttribute("placeHolder", "선택하세요");
  $target.appendChild($select);

  /**
   * 상품 옵션 이름 랜더링 시 상품명 + 옵션명 + 재고: n개 이런 형식으로 보여주어야.
   * 재고 0인 상품의 경우 => 옵션 선택 못하게.
   * [
   *   {
   *     optionName: '옵션 상품',
   *     optionPrice: 1000,
   *     stock: 10
   *   },
   *   ...
   * ]
   */

  this.state = initialState;

  this.setState = (nextState) => {
    // 이전 상태와 같다면 렌더링 스킵 기능 추가 가능!
    this.state = nextState;
    this.render();
  };

  const createOptionFullName = ({ optionName, optionPrice, stock }) => {
    return `${optionName} ${optionPrice > 0 ? `(옵션가 ${optionPrice})` : ""} | ${
      stock > 0 ? `재고 ${stock}` : "재고 없음"
    }`;
  };

  $select.addEventListener("change", (e) => {
    const optionId = parseInt(e.target.value);
    const option = this.state.find((option) => option.optionId === optionId);

    if (option) {
      onSelect(option);
    }
  });

  // render는 순수하게 state만 가지고 렌더링 될 수 있게.
  this.render = () => {
    if (this.state && Array.isArray(this.state)) {
      $select.innerHTML = `
        <option>선택하세요</option> 
        ${this.state
          .map(
            (option) => `
              <option
                ${option.stock === 0 ? "disabled" : ""}
                value="${option.optionId}"
              >
                ${createOptionFullName(option)}
              </option>
            `
          )
          .join("")}
      `;
    }
  };

  this.render();
}
