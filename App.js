import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import RegistrationForm from "./components/Registration Form";
import RegistrationDetails from "./components/Registration Details";

function App() {
  const [registrationData, setRegistrationData] = useState(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/register"
          element={<RegistrationForm setRegistrationData={setRegistrationData} />}
        />
        <Route
          path="/registration-details"
          element={<RegistrationDetails registrationData={registrationData} setRegistrationData={setRegistrationData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
