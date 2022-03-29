import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      <nav>
        <h3>FRIENDS DATABASE</h3>
        <NavLink to='/login'>LOGIN.</NavLink>
        <button>FRIENDSLIST.</button>
        <button>ADDFRIEND.</button>
        <button>LOGOUT.</button>
      </nav>
        <Route path='/login' element={<LoginForm />}/>
    </div>
  );
}

export default App;
