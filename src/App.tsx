import "./App.css";
import MuiThemeProvider from "./components/MuiThemeProvider/MuiThemeProvider";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import Contact from "./components/Contact/Contact";
import Resources from "./components/Resources/Resources";
import { Box } from "@mui/material";
import { container } from "./App.styles";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <MuiThemeProvider>
          <div>
            <Navbar />
            <Box style={container}>
              <div />
              <Routes>
                <Route path="/whoweare" element={<WhoWeAre />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/" element={<Homepage />} />
              </Routes>
              <div />
            </Box>
            <Footer />
          </div>
        </MuiThemeProvider>
      </Router>
    </div>
  );
}

export default App;
