import React, { Component } from 'react';
import './App.css';
import tasks from './data/tasks.json'

// Components
import TaksForm from './components/TaksForm';
import TaskList from './components/TaskList';

// console.log(tasks)

export default class App extends Component {
  
  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    // console.log(title, description)
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    // console.log(newTask)
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  render() {
    return (
      <div>
        <TaksForm addTask={this.addTask} />
        <TaskList tasks={this.state.tasks} />
      </div>
    )
  }
}
