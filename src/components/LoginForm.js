import React from 'react'
import Button from './Button'
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
        {username.length === 0 && <span style={{ color: 'red', marginLeft: '1em' }}>Require Username</span> }<br />
        Password : <Input type="text" value={password} onchange={setPassword} />
        {password.length === 0 && <span style={{ color: 'red', marginLeft: '1em' }}>Require Password</span> }<br />

        <Button onClick={handleSubmit}>Login</Button>
      </form>
    </div>
  )
}

export default LoginForm
