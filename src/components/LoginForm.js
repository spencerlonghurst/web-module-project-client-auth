import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialFormValues = {
  username: '',
  password: '',
}

export default function LoginForm(props) {

  const { push } = useHistory()
  const [values, setValues] = useState(initialFormValues)

  const onChange = evt => {
    setValues({...values, [evt.target.id]: evt.target.value})
  }

  const onSubmit = evt => {
    evt.preventDefault()
    axios.post('http://localhost:9000/api/login', values)
    .then(res => {
      localStorage.setItem('The Token', res.data.token)
      push('/friends')
    })
    .catch(err => {
      console.log(err)
    })
  }


  return (
    <div>
      <form id='loginForm' onSubmit={onSubmit}>
          <h1>LOGIN</h1>
          <h3>USERNAME</h3>
          <input
            id='username'
            onChange={onChange}
            value={values.username}
            placeholder='Username'
          />
          <h3>PASSWORD</h3>
          <input
            id='password'
            onChange={onChange}
            value={values.password}
            placeholder='Password'
          />
          <button>SUBMIT</button>
      </form>
    </div>
  )
}