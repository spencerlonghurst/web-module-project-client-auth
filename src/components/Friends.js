import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Friends () {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('The Token')
    axios.get('http://localhost:9000/api/friends', {
      headers: {
        authorization: token
      }

    })
    .then(res => {
      setFriends(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div>
      <h1>FRIENDS LIST</h1>
      <ul>
        {
          friends.map((friend) => {
            return <li key={friend.id}>- {friend.name} - {friend.email}</li>
          })
        }
      </ul>
    </div>
  )
}