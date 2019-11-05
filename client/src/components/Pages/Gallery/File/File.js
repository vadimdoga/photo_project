import React, { Component } from 'react'
import './File.css'
import axios from 'axios'

export default class File extends Component {
  constructor(){
    super()
    this.state = {
      file: null
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  onChangeHandler(evt){
    this.setState({
      file: evt.target.files[0],
      loaded: 0
    })
  }
  handleSubmit(evt){
    evt.preventDefault()

    const data = new FormData()
    data.append('file', this.state.file)

    axios.post("http://localhost:8080/upload", data)
      .then(res => {
        console.log(res.statusText)
      })

  }
  render(){
    return(
      <div className="file-box">
        <form onSubmit={this.handleSubmit}>
          <label>Upload you file  </label>
          <input type="file" multiple="" className="input-file" onChange={this.onChangeHandler}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}