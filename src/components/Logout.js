import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Logout () {
  const { push } = useHistory()

  useEffect(() => {
    const token = localStorage.getItem('The Token')
    axios.post('http://localhost:9000/api/logout', {}, {
      headers: {
        authorization: token
      }
    })
    .then(res => {
      localStorage.removeItem('The Token')
      push('/login')
    })
    .catch(err => {
      console.log(err)
    })
  })
  return (<div></div>)
}