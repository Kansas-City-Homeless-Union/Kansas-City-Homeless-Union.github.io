import "./App.css";
import MuiThemeProvider from "./components/MuiThemeProvider/MuiThemeProvider";
import Navbar from "./components/NavBar/NavBar";
import { Helmet } from "react-helmet";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Causes from "./components/Causes/Causes";
import Homepage from "./components/Homepage/Homepage";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import Membership from "./components/Membership/Membership";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import Resources from "./components/Resources/Resources";
import { Box } from "@mui/material";
import { container } from "./App.styles";
import Footer from "./components/Footer/Footer";

// better description? The city is at war, not against homelessness, but against the homeless. KCHU will not be silent. We demand to be heard. Our mission is nothing less than the end of homelessness in this City.

function App() {
  return (
    <>
      Kansas City Homeless Union (KCHU) is a union of unhoused Kansas Citians,
      actively seeking equality and equity, and fighting against the system that
      perpetuates and sustains homelessness.
      <Helmet>
        <meta
          name="description"
          content="Kansas City Homeless Union (KCHU) is a union of unhoused Kansas Citians, actively seeking equality and equity, and fighting against the system that perpetuates and sustains homelessness."
          data-react-helmet="true"
        />
        <meta
          property="og:title"
          content="KC Homeless Union"
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content="Kansas City Homeless Union (KCHU) is a union of unhoused Kansas Citians, actively seeking equality and equity, and fighting against the system that perpetuates and sustains homelessness."
          data-react-helmet="true"
        />
        <meta
          property="og:image:url"
          content="https://kchomelessunion.org/negotiations.jpg"
          data-react-helmet="true"
        />
        <meta
          property="og:image:secure_url"
          content="https://kchomelessunion.org/negotiations.jpg"
          data-react-helmet="true"
        />
        <meta
          property="og:url"
          content="https://kchomelessunion.org/"
          data-react-helmet="true"
        />
      </Helmet>
      <div className="App">
        <Router>
          <MuiThemeProvider>
            <div>
              <Navbar />
              <Box style={container}>
                <div />
                <Routes>
                  <Route path="/whoweare" element={<WhoWeAre />} />
                  <Route path="/membership" element={<Membership />} />
                  <Route path="/causes" element={<Causes />} />
                  <Route path="/news" element={<News />} />
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
    </>
  );
}

export default App;
