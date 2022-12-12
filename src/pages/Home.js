import React from 'react';
import Logo from "../components/Logo";
import Test from "../components/Test";

const Home = () => {
    return (
        <div>
            <Logo/>
            <br></br>
            <h1 align={"center"}>Test tondeuse</h1>
            <br></br>
            <br></br>
            <Test/>
        </div>
    );
};

export default Home;
