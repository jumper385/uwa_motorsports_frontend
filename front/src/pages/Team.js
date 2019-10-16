import React from 'react'
import { connect } from 'react-redux'

const Team = () => {
  return(
    <h1>The Team</h1>
  )
}

const mapStateToProps = state => ({
  members: state.members
})

export default connect(mapStateToProps)(Team)