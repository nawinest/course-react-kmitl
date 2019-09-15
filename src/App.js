import React from 'react'
import './App.css'
import PropTypes from 'prop-types'

const App = props => (
  <div className="App">
    <p> Hello {props.name} !! {props.num}</p>
  </div>
)

App.propTypes = {
  name: PropTypes.string.isRequired,
  num: PropTypes.number,
}
App.defaultProps = {
  num: 1,
}

export default App
