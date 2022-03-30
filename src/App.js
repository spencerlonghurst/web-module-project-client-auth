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
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";

const loginUrl = "http://localhost:3000/login";
const friendsUrl = "http://localhost:3000/friends";
const addFriendUrl = "http://localhost:3000/friends/add";
const login = "http://localhost:3000/logout";



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
        <PrivateRoute path="/friends" component={Friends} />
        <PrivateRoute path="/friends/add" component={AddFriend} />
        <PrivateRoute path="/logout" component={Logout}/>
      </div>
    </Router>
  );
}

export default App;
