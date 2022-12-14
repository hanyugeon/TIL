export default function TodoForm({ $target, onSubmit }) {
  const $form = document.createElement("form");

  $target.appendChild($form);

  // this.state = initialState

  // this.setState = (nextState) => {
  //   this.state = nextState
  //   this.render()
  // }

  this.render = () => {
    $form.innerHTML = `
      <input type="text" placeholder="할 일을 입력하세요">
      <button>추가하기</button>
    `;
  };

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    const $input = $form.querySelector("input");
    const content = $input.value;

    onSubmit(content);
    $input.value = "";
  });

  this.render();
}
