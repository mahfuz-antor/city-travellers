import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import firebaseConfig from '../../firebase-config';
import { useState } from 'react';
import Header from '../Header/Header';
import { UserContex } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [loggedInUser, setLoggedInUser] = useContext(UserContex);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
      })
      console.log(loggedInUser);
    
      const googleProvider = new firebase.auth.GoogleAuthProvider();
      const fbProvider = new firebase.auth.FacebookAuthProvider();
      const handleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
          .then(res => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
              isSignedIn: true,
              name: displayName,
              email: email,
              photo: photoURL
            }
            setLoggedInUser(signedInUser);
            history.replace(from);
            console.log(displayName, email, photoURL);
          })
          .catch(err => {
            console.log(err);
            console.log(err.massage);
          })
      }
    
      const handleFbSignIn = () => {
        firebase
          .auth()
          .signInWithPopup(fbProvider)
          .then(result => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
    
            // The signed-in user info.
            var user = result.user;
            
    
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var accessToken = credential.accessToken;
            console.log('fb user after Sing in', user);
            // console.log('fb user after Sing in', accessToken);
    
            const { displayName, email, photoURL } = result.user;
            const signedInFbUser = {
              isSignedIn: true,
              name: displayName,
              email: email,
              photo: photoURL
            }
            setLoggedInUser(signedInFbUser);
            history.replace(from);
            console.log(displayName, email, photoURL);
    
    
            // ...
          })
          .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(errorCode, errorMessage, email, credential);
    
            // ...
          });
      }
    
      const [newUser, setNewUser] = useState(false);
      const handleSignOut = () => {
        firebase.auth().signOut()
          .then(res => {
            const signedOutUser = {
              isSignedIn: false,
              name: '',
              email: '',
              photo: '',
              error: '',
              success: false
            }
            setUser(signedOutUser)
          })
          .catch(err => {
    
          })
      }
    
      const handleChange = (e) => {
        let isFieldValid = true;
    
        if (e.target.name === 'email') {
          isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
          const isPasswordValid = e.target.value.length > 6;
          const passwordHasNumber = /\d{1}/.test(e.target.value);
          isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
          const newUserInfo = { ...user };
          newUserInfo[e.target.name] = e.target.value;
          setUser(newUserInfo);
        }
      }
    
      const handleSubmit = (e) => {
        // console.log(user.email, user.password);
        if (newUser && user.name && user.password) {
          // console.log('submitting');
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
              // Signed in 
              // var user = userCredential.user;
              console.log(user)
              const newUserInfo = { ...user };
              newUserInfo.error = '';
              newUserInfo.success = true;
              setUser(newUserInfo);
              updateUserName(user.name);
            })
            .catch((error) => {
              // var errorCode = error.code;
              // var errorMessage = error.message;
              // console.log(errorCode, errorMessage);
              const newUserInfo = { ...user };
              newUserInfo.error = error.message;
              newUserInfo.success = false;
              setUser(newUserInfo);
            });
        }
    
        if (!newUser && user.email && user.password) {
          firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
              // Signed in

              const { displayName, email, photoURL } = res.user;
            const signedInUser = {
              isSignedIn: true,
              name: displayName,
              email: email,
              photo: photoURL
            }
            setLoggedInUser(signedInUser);
            history.replace(from);
            console.log(displayName, email, photoURL);

              // var user = userCredential.user;
              // const newUserInfo = { ...user };
              // newUserInfo.error = '';
              // newUserInfo.success = true;
              // setUser(newUserInfo);
              // console.log('sign In user info', res.user);
              
            })
            .catch((error) => {
              const newUserInfo = { ...user };
              newUserInfo.error = error.message;
              newUserInfo.success = false;
              setUser(newUserInfo);
            });
        }
    
        e.preventDefault();
      }
    
      const updateUserName = name => {
        const user = firebase.auth().currentUser;
    
        user.updateProfile({
          displayName: name
        }).then(function () {
          // Update successful.
          console.log('user name updated successfully.')
        }).catch(function (error) {
          // An error happened.
          console.log(error)
        });
      }
    
      return (
        <div className="App">
            <Header></Header>
            <div className="container">
          {
            user.isSignedIn ?
              <button onClick={handleSignOut}>Sign out </button> :
              <button onClick={handleSignIn}>Sign in </button>
          }
          
          <br />
          <button onClick={handleFbSignIn}>Sign in Using facebook</button>
    
    
          {
            user.isSignedIn && <div> <p> Welcome, {user.name}</p>
              <p>Email: {user.email}</p>
              <img src={user.photo} alt="" />
            </div>
          }
    
          <h1>Our own Authentication</h1>
          <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
          <label htmlFor="newUser">New User Sign up</label>

          <form onSubmit={handleSubmit}>
            {newUser && <input name="name" onBlur={handleChange} type="text" placeholder="Your Name" />}
            <br />
            <input type="email" onBlur={handleChange} name="email" placeholder="Your email" required />
            <br />
            <input type="password" name="password" onBlur={handleChange} id="" placeholder="Your password" required />
            <br />
            <input type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />
          </form>
          <p style={{ color: 'red' }}>{user.error}</p>
          { user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully.</p>}
          </div>
        </div>
      );
    }

export default Login;