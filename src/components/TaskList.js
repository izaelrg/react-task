import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Task from './Task'

export default class TaskList extends Component {
  render() {
    return (
      this.props.tasks.map(task =>
        <Task task={task} key={task.id} />
        )
    )
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired
}
