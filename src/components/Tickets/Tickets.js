import React, { } from 'react';
// import Form from '../Form/Form';
import Header from '../Header/Header';
import fakeData from '../../fakeData/data.json';
import { useParams } from 'react-router-dom';
import mapImg from '../../images/Map.png';


const Tickets = () => {

    const { id } = useParams();
    const result = fakeData.find(rider => rider.name === "Bike");
    const result1 = fakeData.find(rider => rider.name === "Auto");
    // const result2 = fakeData.find(tree => tree.name === "Bike");
    // const result3 = fakeData.find(tree => tree.name === "Bike");
    console.log(result.name, result1.name);
    console.log(id);

    const bikeStyle = {
        width: '100px',
        height: '80px',
        padding: '10px'
    }

    const mapStyle = {
        marginLeft: '300px',
        width: '300px'
    }

    return (
        <div>
            <Header></Header>
            <div className="container  mt-5">
                <div className="d-lg-flex d-sm-inline-flex d-md-inline-flex" style={{ width: '250px', height: '80px', backgroundColor: 'gray' }}>
                    <img style={bikeStyle} src={result.img} alt="" />
                    <p className="text-center m-2 text-light">{result.name + ' $' + result.salary}</p>
                    <div><img style={mapStyle} src={mapImg} alt="" /></div>
                </div>

                <div className="d-flex" style={{ width: '250px', height: '80px', backgroundColor: 'gray' }}>
                    <img style={bikeStyle} src={result.img} alt="" />
                    <p className="text-center m-2 text-light">{result.name + ' $' + result.salary}</p>
                </div>
                <div className="d-flex" style={{ width: '250px', height: '80px', backgroundColor: 'gray' }}>
                    <img style={bikeStyle} src={result.img} alt="" />
                    <p className="text-center m-2 text-light">{result.name + ' $' + result.salary}</p>

                </div>

            </div>


        </div>
    );
};

export default Tickets;