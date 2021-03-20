import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import firebaseConfig from '../../firebase-config';
import { useState } from 'react';
import Header from '../Header/Header';
import { UserContex } from '../../App';
import { useHistory, useLocation } from 'react-router';

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }

const Form = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    start: '',
    end: ''
  })


  const [newUser, setNewUser] = useState(false);


  const handleChange = (e) => {
    let isFieldValid = true;
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }

  // const handleSubmit = (e) => {
  //   let isFieldValid = true;
  //   if (isFieldValid) {
  //     const newUserInfo = { ...user };
  //     newUserInfo[e.target.name] = e.target.value;
  //     setUser(newUserInfo);
  //   }
  //   // console.log(user.email, user.password);
  //   // if (newUser && user.name && user.password) {
  //   //   // console.log('submitting');
  //   //   firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  //   //     .then(res => {
  //   //       console.log(user)
  //   //       const newUserInfo = { ...user };
  //   //       newUserInfo.error = '';
  //   //       newUserInfo.success = true;
  //   //       setUser(newUserInfo);
  //   //       updateUserName(user.name);
  //   //     })
  //   //     .catch((error) => {
  //   //       const newUserInfo = { ...user };
  //   //       newUserInfo.error = error.message;
  //   //       newUserInfo.success = false;
  //   //       setUser(newUserInfo);
  //   //     });
  //   // }

  //   e.preventDefault();
  // }

  // const updateUserName = name => {
  //   const user = firebase.auth().currentUser;

  //   user.updateProfile({
  //     displayName: name
  //   }).then(function () {
  //     // Update successful.
  //     console.log('user name updated successfully.')
  //   }).catch(function (error) {
  //     // An error happened.
  //     console.log(error)
  //   });
  // }

  return (
    <div className="App">
      <div className="container">
        <h1>Select Visiting Place</h1>
        <form>
          <p>Type Your Starting Place</p>
          <input type="text" onBlur={handleChange} name="start" placeholder="Your starting place" required />
          <br />
          <br />
          <p>Type Your Visiting Place</p>
          <input type="text" onBlur={handleChange} name="end" placeholder="Your ending place" required />
          <br />
          <br />
          <input type="submit" value="Search" />
        </form>
        <p>Name: {user.start}</p>
        <p>Email: {user.end}</p>
      </div>
    </div>
  );
}

export default Form;