import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Places from './components/Places/Places';
import Tickets from './components/Tickets/Tickets';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
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
      <Route path="/places">
        <Places></Places> 
      </Route>
      <Route path="/tickets">
        <Tickets></Tickets>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
