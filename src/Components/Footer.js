import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 

const Footer = () => {
    return (
    <>
            <footer className="Footer"> 
            
            <h2 className="Footer-Title">Nadine Dawod</h2>
        
            <ul className="Icon-List">

                <a className="Icon-Link" href="https://github.com/"> <FontAwesomeIcon className="Icon" icon="fa-brands fa-github" /> </a>
                <a className="Icon-Link" href="https://slack.com/"> <FontAwesomeIcon className="Icon" icon="fa-brands fa-slack" /> </a>
                <a className="Icon-Link" href="https://linkedin.com/"> <FontAwesomeIcon className="Icon" icon="fa-brands fa-linkedin" /> </a>
                <a className="Icon-Link" href="https://figma.com/"> <FontAwesomeIcon className="Icon" icon="fa-brands fa-figma" /></a>
            </ul>
        </footer>
    </>
    )
}

export default Footer;