import React from 'react'

const Input = (props) => {
  const { type, value, onchange } = props
  //   const [val, setVal] = React.useState('')
  const handleInputChange = (event) => {
    onchange(event.target.value)
  }
  return (
    <input
      type={type}
      value={value}
      onChange={handleInputChange}
    />
  )
}

export default Input
