import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialFormData = {
  name: "",
  email: "",
};

export default function AddFriend() {
  const [form, setForm] = useState(initialFormData);
  const { push } = useHistory()

  const onChange = (evt) => {
    setForm({ ...form, [evt.target.id]: evt.target.value });
  };

  const onSubmit = evt => {
    evt.preventDefault()
    const token = localStorage.getItem('The Token')
    axios.post('http://localhost:9000/api/friends', form, {
      headers: {
        authorization: token
      }
    })
    .then(res => {
      // push('/friends')
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>ADD FRIEND</h1>
        <h3>FRIEND NAME:</h3>
        <input id="name" value={form.name} onChange={onChange}/>
        <h3>FRIEND EMAIL:</h3>
        <input id="email" value={form.email} onChange={onChange}/>
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
