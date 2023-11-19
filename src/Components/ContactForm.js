import ReusableButton from "./ReusableButton";


 const ContactForm = () => {
    return (
        <>
        
        <form className="ContactForm">
            <input type="text" className="Form Name" name="name" placeholder="Enter name"></input>
            <input type="email" className="Form Email" name="email" placeholder="Enter email" required></input>
            <input type="tel" className="Form Tel" name="tel" placeholder="Enter number"></input>
            <textarea name="message" id="message" className="message" placeholder="Write your message here"required></textarea>
            
            <div className="tic-box">
                <input type="checkbox" id="check" required></input>
                <label className="Check-Terms" for="check">I agree to the <a className="Link-Terms" href="#">Terms&Conditions</a></label>
            </div>
        </form>
        
        <ReusableButton>Submit</ReusableButton>
    </>
    )
 }

 export default ContactForm;