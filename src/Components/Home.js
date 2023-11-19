import ReusableButton from "./ReusableButton";
import {useState, useEffect} from "react";

const Home = () => {



    const BoxOne = () => {
        <div className="offer-box">
        <p className="PagePara">
            Curabitur posuere gravida nulla, ac convallis eros convallis ut. 
            Curabitur posuere gravida nulla, ac convallis eros convallis ut.
        </p>
        </div>
    };

    const BoxTwo = () => {
        alert("Curabitur posuere gravida nulla, ac convallis eros convallis ut. Curabitur posuere gravida nulla, ac convallis eros convallis ut.");
    };
    const BoxThree = () => {
        alert("Curabitur posuere gravida nulla, ac convallis eros convallis ut. Curabitur posuere gravida nulla, ac convallis eros convallis ut.");
    };

    return (

        <div className="PageBodies">

            <h1 className="PageTitle">WELCOME</h1>

            <div className="offer-container">

                <div className="offer 1">
                    <h2 className="PageHeader">Development</h2>
                    <ReusableButton handleClick={BoxOne}>
                    More info</ReusableButton>
                </div>  

                <div className="offer 2">
                    <h2 className="PageHeader">Planning</h2>
                    <ReusableButton handleClick={BoxTwo}>More info</ReusableButton>  
                </div>  

                <div className="offer 3">
                    <h2 className="PageHeader">Creativity</h2>
                    <ReusableButton handleClick={BoxThree}>More info</ReusableButton>
                </div>  

            </div>
        </div>
    )
}

export default Home;