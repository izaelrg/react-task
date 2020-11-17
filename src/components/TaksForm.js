import React, { Component } from 'react'

export default class TaksForm extends Component {

  state = {
    title: '',
    description: '',
  }
  
  onSubmit = e => {
    // console.log(this.state)
    this.props.addTask(this.state.title, this.state.description)
    e.preventDefault()
  }

  onChange = e => {
    // console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          name="title"
          type="text" 
          placeholder="Write a Task" 
          onChange={this.onChange} 
          value={this.state.title} 
        />
        <br /> <br />
        <textarea 
          name="description"
          placeholder="Write a Description" 
          cols="30" rows="10" 
          onChange={this.onChange} 
          value={this.state.description}>
        </textarea>
        <input type="submit" value="Save task" />
      </form>
    )
  }
}
