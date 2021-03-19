import React from 'react';
import Header from '../Header/Header';

const handleSubmit = () => {

}

const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
}

const Places = () => {
    return (
        <div>
            <h1>This is Places Page.</h1>
            <Header></Header>
            <div className="container">
                <label className="well bd-light">
                <form onSubmit={handleSubmit} action="">
                    <p>starting place</p>
                    <input onBlur={handleChange} type="text" name="start" id="" />
                    <br />
                    <p>ending place</p>
                    <input onBlur={handleChange} type="text" name="end" id="" />
                    <br/> <br/>
                    <input type="submit" value="Search"/>
                </form>
                </label>
            </div>
        </div>
    );
};

export default Places;