import Home from "./Home";
import About from "./About";
import Contact from "./Contact";



const Header = () => {
    return (
        <>
        <header className="Header">

        <h2 className="Header-Title">Nadine Dawod</h2>

        <nav className="Nav-Bar">

            <ul className="Nav-List">
                <li className="Nav-Link"><a href="./Home">Home</a></li>
                <li className="Nav-Link"><a href="./About">About</a></li>
                <li className="Nav-Link"><a href="./Contact">Contact</a></li>
            </ul>
        </nav>
        </header>
        </>
    )
}

export default Header;