import React, { } from 'react';
// import Form from '../Form/Form';
import Header from '../Header/Header';
import fakeData from '../../fakeData/data.json';
import {  useParams } from 'react-router-dom';


const Tickets = () => {

    const {id} = useParams();
    const result = fakeData.find(rider => rider.name === "Bike");
    const result1 = fakeData.find(rider => rider.name === "Auto");
    // const result2 = fakeData.find(tree => tree.name === "Bike");
    // const result3 = fakeData.find(tree => tree.name === "Bike");
    console.log(result.name, result1.name);
    console.log(id);

const bikeStyle = {
    width:'80px',
    height:'50px'
}
    return (
        <div>
            <Header></Header>
            <div>
                <h1>You Select: {result.name + ' ' + result.salary}</h1>
                <img style={bikeStyle} src={result.img} alt="" />
            </div>

        </div>
    );
};

export default Tickets;