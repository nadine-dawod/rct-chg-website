import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import {library} from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <BrowserRouter>

      <div><Header /></div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
      <div><Footer /></div>

    </BrowserRouter>
  );
}

export default App;
library.add(fab);