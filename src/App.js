import React from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: uuidv4(),
          completed: true,
        },
        {
          task: "Bake Cookies",
          id: uuidv4(),
          completed: false,
        },
      ],
    };
  }

  addTodo = (task) => {
    const newItem = {
      task: task,
      id: uuidv4(),
      completed: false,
    };
    this.setState({ todos: this.state.todos.concat(newItem) });
  };

  toggleComplete = id => {
    this.setState(
  {
    todos:this.state.todos.map(item =>{
      if (item.id === id){
        return{...item, completed: !item.completed}

      }
      else{
        return item
      }
    })
  })
  }
   clearCompleted = event => {
     event.preventDefault();
     this.setState({
       todos: this.state.todos.filter(task => !task.completed)
     })
   }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleComplete = {this.toggleComplete} />
        <TodoForm addTodo={this.addTodo} clearCompleted ={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
