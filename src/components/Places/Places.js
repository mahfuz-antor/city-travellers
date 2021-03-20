import React, { } from 'react';
// import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
// import firebaseConfig from '../../firebase-config';
import { useState } from 'react';
import Header from '../Header/Header';
import mapImg from '../../images/Map.png';
// import Tickets from '../Tickets/Tickets';
import { Link } from 'react-router-dom';



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
    const mapStyle = {
        marginLeft: '50px'
    }
        

    return (
        
        <div>
            <Header></Header>
            <div className="container">
            <p>Starting: {user.start}</p>
            <p>Ending: {user.end}</p>
            <p>Time: {user.time}</p>
            <p>Date: {user.date}</p>
          </div>
          <div className="container d-flex m-5">
          
            
            <form className="container"><h5>Select Visiting Place</h5>
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
              {/* <input onClick={handleSubmit} type="submit" value="Search" /> */}
               <button><Link class="nav-link text-dark" to="/tickets">Search</Link></button>
            </form>
           
            <br/>
            <div><img style={mapStyle} src={mapImg} alt=""/></div>
            
            
          </div>
          
          

        </div>
      );
};

export default Places;