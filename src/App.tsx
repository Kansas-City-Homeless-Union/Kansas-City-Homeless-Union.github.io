import React from "react";
import "./App.css";
import MuiThemeProvider from "./components/MuiThemeProvider/MuiThemeProvider";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import Contact from "./components/Contact/Contact";
import Resources from "./components/Resources/Resources";

function App() {
  return (
    <div className="App">
      <Router>
        <MuiThemeProvider>
          <Navbar />
          <div style={{ padding: 15 }}>
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
            <Routes>
              <Route path="/whoweare" element={<WhoWeAre />} />
            </Routes>
            <Routes>
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Routes>
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </div>
        </MuiThemeProvider>
      </Router>
    </div>
  );
}

export default App;
