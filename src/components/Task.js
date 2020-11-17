import React, { Component } from 'react'


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
        {task.id} -
        <input type="checkbox"/>
        <button className={btnDelete}>❌</button>
      </p>
    )
  }
}

export default Task
