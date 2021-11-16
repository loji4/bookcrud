import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'

function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleRegister = (evt) => {
        evt.preventDefault()
        fetch('/api/users/register',{
          method:'POST',
          body:JSON.stringify({
            username:email,password 
          })
        })
    }

    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(evt)=>{setEmail(evt.target.value)}} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(evt)=>{setPassword(evt.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleRegister}>
          Submit
        </Button>
      </Form>
    )
}

export default Login