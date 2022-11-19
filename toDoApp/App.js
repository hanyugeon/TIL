import { request } from "./api/api.js";
import Header from "./components/Header.js";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";

export default function App({ $target }) {
  this.state = {
    username: "roto",
    todos: [],
  };

  new Header({
    $target: $target,
    initialState: this.state.username,
  });

  new TodoForm({
    $target: $target,
    onSubmit: (content) => {
      alert(`${content} 추가 예정`);
    },
  });

  new TodoList({
    $target: $target,
    initialState: this.state.todos,
    onToggle: (id) => {
      alert(`${id} 변환 예정`);
    },
    onRemove: (id) => {
      alert(`${id} 삭제 예정`);
    },
  });

  const init = async () => {
    const { username } = this.state;

    if (username) {
      const todos = await request(`/${username}`);
      console.log(todos);
    }
  };

  init();
}
