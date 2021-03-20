import React, { useContext, useEffect, useState } from 'react';
// import Login from '../Login/Login';
import BgImg from '../../images/thumb-1920-85305.jpg'
import Header from '../Header/Header';
import fakeData from '../../fakeData/data.json';
import { Link } from 'react-router-dom';
import { UserContex } from '../../App';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(fakeData);
        console.log(fakeData);
        const names = fakeData.map(data => data.name)
        console.log(names);
    }, [])

    const cardStyle = {
        width: '200px',
        height: '250px',
        float: 'left',
        color: 'lightblue',
        margin: '25px',
        marginBottom: '100px',
        marginTop: '50px',
        backgroundColor: 'gray',
        borderRadius: '20px'
    }

    const imgStyle = {
        width: '190px',
        height: '190px',
        borderRadius: '20px'
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContex);
    return (
        <div style={{backgroundSize:'100% 100%', backgroundRepeat:'no-repeat', overflow: 'hidden', backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${BgImg})` }}>

            <Header></Header>
            <div  className="container">
                {
                    data.map(data =>
                        <Link  className="text-center" to="/places"> <div style={cardStyle}>
                            <img className="p-2" style={imgStyle} src={data.img} alt="" />
                            <h2 className="text-center">{data.name}</h2>
                        </div> 
                        </Link>
                        
                        )
                }
            </div>

        </div>
    );
};

export default Home;