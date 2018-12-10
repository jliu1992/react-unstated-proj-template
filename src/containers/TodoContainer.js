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
  }

  addTodo(todo) {
    this.id += 1;
    const newTodo = {
      id: this.id,
      marked: false,
      description: todo,
    };
    this.setState(state => ({
      todos: [...state.todos, newTodo],
    }));
  }

  removeTodo(id) {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id),
    }));
  }
}

export default TodoContainer;
