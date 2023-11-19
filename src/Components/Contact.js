import ContactForm from "./ContactForm";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
    return (

        <div className="PageBodies">
    
        <Header></Header>

        <h2 className="PageHeader">Contact me</h2>

        <ContactForm></ContactForm>


        <Footer></Footer>    
    </div>
    )
}

export default Contact;