import React from 'react'
import Input from './Input'

const LoginForm = (props) => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, password)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Username : <Input type="text" value={username} onchange={setUsername} />
        Password : <Input type="text" value={password} onchange={setPassword} />
        <button type="submit"> Login </button>
      </form>
    </div>
  )
}

export default LoginForm
