import React, { useState } from "react";

const initialFormData = {
  name: "",
  email: "",
};

export default function AddFriend() {
  const [form, setForm] = useState(initialFormData);

  const onChange = (evt) => {
    setForm({ ...form, [evt.target.id]: evt.target.value });
  };

  console.log(form)
  return (
    <div>
      <form>
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
