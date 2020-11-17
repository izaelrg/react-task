import React, { Component } from 'react'
import Task from './Task'

export default class TaskList extends Component {
  render() {
    return (
      this.props.tasks.map(task =>
        <Task task={task} />
        )
    )
  }
}
