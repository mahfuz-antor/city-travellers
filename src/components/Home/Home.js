import React, { useEffect, useState } from 'react';
import Login from '../Login/Login';
import BgImg from '../../images/thumb-1920-85305.jpg'
import Header from '../Header/Header';
import Vehicle from '../../fakeData/data.json';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Vehicle);
        console.log(Vehicle);
        const names = Vehicle.map(data => data.name)
        console.log(names);
    }, [])

    const cardStyle = {
        width: '200px',
        height: '200px',
        float: 'left',
        color: 'lightblue',
        margin: '20px'
    }

    const imgStyle = {
        width: '180px',
        height: '150px'
    }
    return (
        <div style={{width:'100%', height:'500px', backgroundRepeat:'no-repeat', overflow: 'hidden', backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${BgImg})` }}>
            <h1>This is Home Page.</h1>
            <Header></Header>
            <div  className="container">
                {
                    data.map(data =>
                        <Link to="/places"> <div style={cardStyle}>
                            <img style={imgStyle} src={data.img} alt="" />
                            <h5>{data.name}</h5>
                        </div> 
                        </Link>
                        
                        )
                }
            </div>



        </div>
    );
};

export default Home;