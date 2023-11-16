import NadinePicture from "../NadinePicture.jpeg";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
    return (

    <div className="PageBodies">

    <Header></Header>

        <img src={NadinePicture} className="ProfilePicture" alt="Profile Pictue of Nadine" />

        <h2 className="PageHeader">The person</h2>
        <p className="PagePara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Curabitur aliquet ex libero, consectetur egestas metus faucibus vel.
        Curabitur posuere gravida nulla, ac convallis eros convallis ut. 
        </p>

        <h2 className="PageHeader">The credentials</h2>

       <div className="cv-container">

       <h3 className="CV-Head 1">Employee</h3>
       <p className="CV-Sub 1">Time period</p>
       <p className="CV-Para 1">Curabitur posuere gravida nulla, ac convallis eros convallis ut. Curabitur posuere gravida nulla, ac convallis eros convallis ut.</p>

       <h3 className="CV-Head 2">Employee</h3>
       <p className="CV-Sub 2">Time period</p>
       <p className="CV-Para 2">Curabitur posuere gravida nulla, ac convallis eros convallis ut. Curabitur posuere gravida nulla, ac convallis eros convallis ut.</p>

       <h3 className="CV-Head 3">Employee</h3>
       <p className="CV-Sub 3">Time period</p>
       <p className="CV-Para 3">Curabitur posuere gravida nulla, ac convallis eros convallis ut. Curabitur posuere gravida nulla, ac convallis eros convallis ut.</p>
        </div> 

    <Footer></Footer>    
    </div>
    )
}

export default About;


