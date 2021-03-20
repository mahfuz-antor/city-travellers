import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContex } from '../../App';




const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContex);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
      })
    return (
        <div className="container mt-5">
            <nav class="navbar navbar-expand-lg navbar-light bg-secondary rounded">
                <div class="container-fluid text-info">
                    <a class="navbar-brand  text-light" href="../Home">City Travellers</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse flex-row-reverse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active text-light" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light" to="/places">Place</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light" to="/tickets">Ticket</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light" to="/login"> Login: {loggedInUser.name} </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;