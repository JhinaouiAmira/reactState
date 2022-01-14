import React, { Component } from 'react'
import Profile from './Components/Profile'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={Show:true
  }
    
  }
  render() {
    return (
      <div>
       {this.state.Show && <Profile />}
      <button onClick={()=>this.setState({Show:!this.state.Show})}>Show</button>
      </div>
    )
  }
}
