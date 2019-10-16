import React from 'react'
import { connect } from 'react-redux'

class Team extends React.Component{

  componentDidMount(){
    console.log('Hello World')
  }

  render(){
    return(
      <h1>Hello World</h1>
    )
  }
}

const mapStateToProps = state => ({
  members: state.members
})

export default connect(mapStateToProps)(Team)