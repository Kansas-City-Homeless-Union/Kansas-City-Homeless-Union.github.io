import "./footer.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const breakpoint = 500;

const Footer = () => {
  const linkStyle = {
    marginRight: window.innerWidth < breakpoint ? 15 : 25,
    fontSize: window.innerWidth < breakpoint ? ".925rem" : "1rem",
    color: "#1c1c1c",
    textDecoration: "none",
  };

  return (
    <div
      style={{
        minHeight: 100,
        margin: "auto",
        marginTop: 20,
        backgroundColor: "white",
        color: "#1c1c1c",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{ borderTop: "1px solid #e8e8e8", width: "95%", margin: "auto" }}
      />
      <div
        style={{
          display: "flex",
          maxWidth: 750,
          margin: "auto",
          padding: 5,
        }}
      >
        <Link to={"/"} className="footerLink">
          <Typography style={linkStyle}>Home</Typography>
        </Link>
        <Link to={"/whoweare"} className="footerLink">
          <Typography style={linkStyle}>Who We Are</Typography>
        </Link>
        <Link to={"/resources"} className="footerLink">
          <Typography style={linkStyle}>Resources</Typography>
        </Link>
        <Link to={"/contact"} className="footerLink">
          <Typography style={linkStyle}>Contact</Typography>
        </Link>
      </div>
      <Typography style={{ textAlign: "center", marginBottom: 15 }}>
        2022 ©HugYoHoodInc. All Rights Reserved.
      </Typography>
    </div>
  );
};
export default Footer;
