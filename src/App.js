import React, { Component } from 'react';
import axios from './axios';





import Form from './Components/Form';
import ToDoList from './Components/ToDoList';
import Title from './Components/Title';
import './App.css';


window.id = 0;
class App extends Component {
  
  state = {
    data: []
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  updateStateFromLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);

        try {
          value = JSON.parse(value);
          this.setState({[key]: value});
        } catch (e) {
          this.setState({[key]: value});
        }
      }
    }
  }

  componentDidMount() {
    this.updateStateFromLocalStorage();

    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    this.saveStateToLocalStorage();
  }

  addTodo = (value, e) => {
    e.preventDefault();
    console.log(value);
    if (value !== '') {
    const todo = {text: value, id: window.id++, isCompleted: false};
    this.state.data.push(todo);
    this.setState({data: this.state.data});
  
  } 
  }


  handleRemove = (id) => {
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    this.setState({data: remainder});
  }

  handleClearAll = () => {
    this.setState({data: []})
  }


  handleComplete = id => {
    const data = this.state.data.map((item) => {
    if (item.id === id) {
    return {...item, isCompleted: true}
    } else {
    return item;
    }
    });
    this.setState({data: data})
    
    };

  render() {

   

    return (
      <div className="App">
        <Title />
        <Form addTodo={this.addTodo} clear={this.handleClearAll} state={this.state}></Form>
        <ToDoList todos={this.state.data} remove={this.handleRemove} complete={this.handleComplete}></ToDoList>
      </div>
    );
  }
}

export default App;
