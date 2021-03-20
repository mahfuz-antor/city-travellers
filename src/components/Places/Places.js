import React, { } from 'react';
// import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
// import firebaseConfig from '../../firebase-config';
import { useState } from 'react';
import Header from '../Header/Header';

const handleSubmit = () => {

}

const Places = () => {

    const [user, setUser] = useState({
        name: '',
        start: '',
        end: '',
        time: null,
        date: null
      })
    
    //   const [newUser, setNewUser] = useState(false);
    
      const handleChange = (e) => {
        let isFieldValid = true;
        if (isFieldValid) {
          const newUserInfo = { ...user };
          newUserInfo[e.target.name] = e.target.value;
          setUser(newUserInfo);
        }
      }

    //   const [loggedInUser, setLoggedInUser] = useState({});
        

    return (
        
        <div className="App">
            <Header></Header>
          <div className="container">
            <h5>Select Visiting Place</h5>
            <form>
              <p>Type Your Starting Place</p>
              <input type="text" onBlur={handleChange} name="start" placeholder="Your starting place" required />
              <br />
              <br />
              <p>Type Your Visiting Place</p>
              <input type="text" onBlur={handleChange} name="end" placeholder="Your ending place" required />
              <br />
              <br />
              <input type="time" name="time" id="" onBlur={handleChange} required />
              <br/>
              <br/>
              <input type="date" name="date" id="" onBlur={handleChange} required />
              <br />
              <br />
              <input type="submit" value="Search" />
            </form>
            <br/>
            {/* <p>Starting: {user.start}</p>
            <p>Ending: {user.end}</p>
            <p>Time: {user.time}</p>
            <p>Date: {user.date}</p> */}
          </div>
        </div>
      );
};

export default Places;