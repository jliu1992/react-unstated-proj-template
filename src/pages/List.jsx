import React from 'react';
import { Subscribe } from 'unstated';
import TodoContainer from '../containers/TodoContainer';

function App() {
  return (
    <Subscribe to={[TodoContainer]}>
      {todoContainer => (
        <div className="list">
          <ul>
            {todoContainer.state.todos.map(todo => (
              <li key={todo.id}>
                <span>{todo.description}</span>
                <i onClick={() => todoContainer.removeTodo(todo.id)}>delete</i>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Subscribe>
  );
}

export default App;
