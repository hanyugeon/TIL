export default function TodoList({ $target, initialState, onRemove, onToggle }) {
  const $todo = document.createElement("div");

  $target.appendChild($todo);

  /**
   * {
   *   username: 'kim',
   *   todos: [],
   * }
   */

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const isTodoEmpty = () => {
    if (this.state.length !== 0) return false;

    return ($todo.innerHTML = `Todo가 없습니다.`);
  };

  this.render = () => {
    if (isTodoEmpty()) return;

    $todo.innerHTML = `
      <ul>
        ${this.state
          .map(
            ({ _id, content, isCompleted }) =>
              `
                <li
                  class="todo-item"
                  data-id="${_id}"
                >
                  ${isCompleted ? `<s>${content}</s>` : content}
                  <button class="remove">x</button>
                </li>
              `
          )
          .join("")}
      </ul>
    `;
  };

  $todo.addEventListener("click", (e) => {
    const $document = e.target.closest(".todo-item");

    if (!$document) return;

    const { id } = $document.dataset;
    // 실제 이벤트를 발생시킨 곳은 어디인지 찾는법?
    const { className } = e.target;
    if (className === "remove") {
      onRemove(id);
    } else {
      onToggle(id);
    }

    // 정확히 몇번째를 클릭했는지 찾는법?
  });

  this.render();
}
