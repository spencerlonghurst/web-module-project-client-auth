import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  useNavigate,
  Routes,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Friends from "./components/Friends";
import AddFriend from "./components/AddFriend";

const loginUrl = "http://localhost:3000/login";
const friendsUrl = "http://localhost:3000/friends";
const addFriendUrl = "http://localhost:3000/friends/add";
const login = "http://localhost:3000/logout";



const LogOut = () => {
  return <h2>LOGOUT</h2>;
};

function App() {
  // const navigate = useNavigate()

  return (
    <Router>
      <div className="App">
          <h3>FRIENDS DATABASE</h3>
        <nav>
          <NavLink id="loginScreen" to="/login">
            LOGIN
          </NavLink>
          <NavLink id="friendsList" to="/friends">
            FRIENDSLIST
          </NavLink>
          <NavLink id="addFriend" to="/friends/add">
            ADDFRIEND
          </NavLink>
          <NavLink id="logout" to="/logout">
            LOGOUT
          </NavLink>
        </nav>

        <h2>Hello World</h2>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/friends">
          <Friends />
        </Route>
        <Route path="/friends/add">
          <AddFriend />
        </Route>
        <Route path="/logout">
          <LogOut />
        </Route>
      </div>
    </Router>
  );
}

export default App;
