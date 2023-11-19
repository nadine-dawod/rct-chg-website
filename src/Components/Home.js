import ReusableButton from "./ReusableButton";
import { useState } from "react";

const Home = () => {

    const [showOne, setShowOne] = useState(true);
    const [showTwo, setShowTwo] = useState(true);
    const [showThree, setShowThree] = useState(true);


    return (

        <div className="PageBodies">

        <h1 className="PageTitle">WELCOME</h1>

            <div className="offer-container">

                <div className="offer 1">
                    <h2 className="PageHeader">Development</h2>
                    <ReusableButton handleClick={() => setShowOne(!showOne)}>
                    {showOne ? "More" : "Less"} info
                    </ReusableButton>
                    {showOne ? null : <BoxOne />}
                    
                </div>  
            

                <div className="offer 2">
                    <h2 className="PageHeader">Planning</h2>
                    <ReusableButton handleClick={() => setShowTwo(!showTwo)}>
                    {showTwo ? "More" : "Less"} info
                    </ReusableButton>  
                    {showTwo ? null : <BoxTwo />}
                </div>  


                <div className="offer 3">
                    <h2 className="PageHeader">Creativity</h2>
                   <ReusableButton handleClick={() => setShowThree(!showThree)}>
                    {showThree ? "More" : "Less"} info
                    </ReusableButton>  
                    {showThree ? null : <BoxThree />}
                </div>  

            </div>
        </div>
    )


    function BoxOne() {
        return (
        <div className="offer-box">
        <p className="PagePara">Curabitur posuere gravida nulla, ac convallis eros convallis ut. Curabitur posuere gravida nulla, ac convallis eros convallis ut. Curabitur posuere gravida nulla, ac convallis eros convallis ut.</p>
        </div>
        )
    }

    function BoxTwo() {
        return (
            <div className="offer-box">
            <p className="PagePara">This is the content of the second box. This is the content of the second box. This is the content of the second box. This is the content of the second box. This is the content of the second box. This is the content of the second box.</p>
            </div>
        )
    }

    function BoxThree() {
        return (
            <div className="offer-box">
            <p className="PagePara">This is the content of the third box. This is the content of the third box. This is the content of the third box. This is the content of the third box. </p>
            </div>
        )
    }

}

export default Home;