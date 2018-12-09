import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Subscribe } from 'unstated';
import TodoContainer from '../containers/TodoContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const { value } = e.target;
    this.setState({ value });
  }

  handleClick(addTodo) {
    const { value } = this.state;
    const { history } = this.props;
    if (value) {
      addTodo(value);
      this.setState({ value: '' });
      history.push('/');
    }
  }

  render() {
    const { value } = this.state;
    return (
      <Subscribe to={[TodoContainer]}>
        {todoContainer => (
          <div className="add">
            <input
              placeholder="your new todo"
              value={value}
              onChange={this.handleInputChange}
            />
            <button type="button" onClick={() => this.handleClick(todoContainer.addTodo)}>Add</button>
          </div>
        )}
      </Subscribe>
    );
  }
}

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(App);
