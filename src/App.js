// import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Places from './components/Places/Places';
import Tickets from './components/Tickets/Tickets';
// import fakeData from './fakeData/data.json';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContex = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContex.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/header">
            <Header></Header>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/places">
            <Places></Places>
          </PrivateRoute>
          <Route path="/tickets">
            <Tickets></Tickets>
          </Route>
        </Switch>
        {/* <h1>Name: {loggedInUser.name}</h1> */}
      </Router>
    </UserContex.Provider>
  );
}

export default App;
