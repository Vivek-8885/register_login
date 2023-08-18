import React from "react";
import './homepage.css';

const Homepage = ({ setLoginUser }) => {
 
    const home=()=>{
        return <h1>dnkds</h1>;
    }

    return (
            <nav>
                <ul className="nav">
                    <li><a href="#" onClick={home}>Home</a></li>
                    <li><a href="https://google.com">New Updates</a></li>
                    <li><a href="https://google.com">Profile</a></li>
                </ul>
            </nav>
    );
};

export default Homepage;
