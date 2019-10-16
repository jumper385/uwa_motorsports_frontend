import React from 'react';
import { connect } from 'react-redux'

class App extends React.Component{
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    return(
      <h1>Hello World</h1>
    )
  }
}

const mapStatesToProps = state => ({...state})

export default connect(mapStatesToProps)(App);
