import {
  Container,
} from 'unstated';

class TodoContainer extends Container {
  constructor(props) {
    super(props);
    this.id = 0;
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.markTodo = this.markTodo.bind(this);
  }

  addTodo(todo) {
    const newTodo = {
      id: this.id++,
      marked: false,
      description: todo,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id),
    });
  }

  markTodo(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          marked: !todo.marked,
        };
      }),
    });
  }
}

export default TodoContainer;
