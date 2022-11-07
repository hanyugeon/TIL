import TodoList from "./TodoList.js";
import TodoComments from "./TodoComments.js";
import { request } from "./api.js";

export default function App({ $app }) {
  this.state = {
    todos: [],
    selectedTodo: null,
    comments: [],
  };

  this.setState = (nextState) => {
    this.state = nextState;
    todoList.setState(this.state.todos);
    todoComments.setState({
      selectedTodo: this.state.selectedTodo,
      comments: this.state.comments,
    });
  };

  const todoList = new TodoList({
    $target: $app,
    initialState: this.todos,
    onClick: async (id) => {
      const selectedTodo = this.state.todos.find((todo) => todo.id === id);
      this.setState({
        ...this.state,
        selectedTodo,
      });

      // 댓글 목록 불러오기
      try {
        // 로딩중 보여주기 처리
        const response = await request(`https://kdt.roto.codes/comments?todo.id=${id}`);

        this.setState({
          ...this.state,
          comments: response,
        });
      } catch (error) {
        // promise의 .catch와 비슷한 역할
        console.error(error);
      } finally {
        // promise .finally와 비슷한 역할
        // 로딩중 숨겨주는 처리
      }
    },
  });

  const todoComments = new TodoComments({
    $target: $app,
    initialState: {
      selectedTodo: this.state.selectedTodo,
      comments: this.state.comments,
    },
  });

  // todos 불러오기
  const init = async () => {
    const response = await request("https://kdt.roto.codes/todos");

    this.setState({
      ...this.state,
      todos: response,
    });
  };

  init();
}
