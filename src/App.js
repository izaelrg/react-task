import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import tasks from './data/tasks.json'

// console.log(tasks)

export default class App extends Component {
  state = {
    tasks: tasks
  }

  render() {
    return (
      <div>
        <TaskList tasks={this.state.tasks} />
      </div>
    )
  }
}
