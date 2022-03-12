import { useRef, useState } from "react";
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
  // show footer logic (could move to separate component that renders children)
  const [showFooter, setShowFooter] = useState<boolean>(false);
  const listInnerRef = useRef(null);
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight > scrollHeight - 20) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    }
  };

  return (
    <div
      className="App"
      onScroll={onScroll}
      ref={listInnerRef}
      style={{ overflowY: "auto" }}
    >
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
            {/* leave room for footer (look, I don't like it, either) */}
            <div style={{ marginBottom: 100 }} />
            <Footer showFooter={showFooter} />
          </div>
        </MuiThemeProvider>
      </Router>
    </div>
  );
}

export default App;
