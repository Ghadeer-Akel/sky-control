import { Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import "./assets/css/fontstyle.css";
import "./assets/css/layout.css";
import "./assets/css/animation.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
