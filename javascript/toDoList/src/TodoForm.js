export default function TodoForm({ $target, onSubmit }) {
  const $todoForm = document.createElement("form");

  $target.appendChild($todoForm);

  let isInit = false;

  this.render = () => {
    $todoForm.innerHTML = `
      <input type="text" name="todo" />
      <button>Add</button>
    `;

    if (!isInit) {
      $todoForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const todo = $todoForm.querySelector("input[name=todo]");
        const text = todo.value;

        todo.value = "";

        if (text.length > 1) {
          todo.value = "";
          onSubmit(text);
        }
      });
      isInit = true;
    }
  };

  this.render();
}

/**
 * TodoForm에서 입력받은 값을 TodoList에 넣으려면?
 *
 * TodoForm 생성 파라미터에 TodoList 넣고 직접 참조하기? ( X )
 *
 * 이렇게 할 경우 TodoForm에 TodoList 컴포넌트의 의존성이 강하게 생기게 됨.
 *
 * TodoForm 생성 파라미터에 이벤트 콜백을 넣고, text를 입력 받으면 해당 콜백을 통해 text 넘겨주기 ( O )
 */

/**
 * 오늘 할 것
 *
 * 목표는 async await 까지.
 * TIL 작성
 */
