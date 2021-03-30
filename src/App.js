import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UserProfile from "./components/UserProfile/UserProfile";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/register/task/:id">
            <Register />
          </PrivateRoute>
          <PrivateRoute path="/user">
            <UserProfile></UserProfile>
          </PrivateRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}
export default App;
