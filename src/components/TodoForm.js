import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
    };
  }
  handleChanges = (e) => {
    e.preventDefault();
    this.setState({ newTodo: e.target.value });
  };
  render() {
    return (
      <form>
        <input
          type="text"
          name="todo"
          value={this.state.newTodo}
          onChange={this.handleChanges}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            this.props.addTodo(this.state.newTodo);
            this.setState({newTodo:""})
          }}
        >

          Add
        </button>

        <button onClick={this.props.clearCompleted}>Clear</button>
      </form>
    );
  }
}

export default TodoForm;
