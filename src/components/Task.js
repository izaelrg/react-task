import React, { Component } from 'react'
import PropTypes from 'prop-types'


const btnDelete = {
  fontSize: '18px',
  background: 'lightgreen',
  color: '#fff',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '50%',
  cursor: 'pointer'
}

class Task extends Component {

  StyleCompleted() {
    return {
      fontSize: '20px',
      color: this.props.task.done ? 'gray' : 'green',
      textDecoration: this.props.task.done ? 'line-through' : 'none',
    }
  }

  render() {
    const {task} = this.props

    return (
      <p style={this.StyleCompleted()}>
        {task.title} -
        {task.description} -
        {task.done} -
        {task.id}
        <input 
          type="checkbox"
          onChange={this.props.checkDone.bind(this, task.id)}
        />
        <button 
          style={btnDelete}
          onClick={this.props.deleteTask.bind(this, task.id)}
        >
          ❌
        </button>
      </p>
    )
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

export default Task
