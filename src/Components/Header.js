import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <>
        <header className="Header">

        <h2 className="Header-Title">Nadine Dawod</h2>

        <nav className="Nav-Bar">

            <ul className="Nav-List">
                <li className="Nav-Link"><Link className="Link" to="/">Home</Link></li>
                <li className="Nav-Link"><Link className="Link" to="/About">About</Link></li>
                <li className="Nav-Link"><Link className="Link" to="/Contact">Contact</Link></li>
            </ul>
        </nav>
        </header>
        </>
    )
}

export default Header;