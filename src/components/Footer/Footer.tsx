import "./footer.css";
import { Typography } from "@mui/material";

const Footer = () => {
  const linkStyle = {
    marginRight: 15,
    fontSize: ".925rem",
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
          maxWidth: 900,
          margin: "auto",
          padding: 5,
        }}
      >
        <a href="/" className="footerLink">
          <Typography style={linkStyle}>Home</Typography>
        </a>
        {/* <a href="/whoweare" className="footerLink">
            <Typography style={linkStyle}>Who We Are</Typography>
            </a> */}
        <a href="/membership" className="footerLink">
            <Typography style={linkStyle}>Membership</Typography>
        </a>
        <a href="/news" className="footerLink">
            <Typography style={linkStyle}>News</Typography>
        </a>
        <a href="/causes" className="footerLink">
            <Typography style={linkStyle}>What Causes Homelessness?</Typography>
        </a>
        {/* <a href="/resources"} className="footerLink">
            <Typography style={linkStyle}>Resources</Typography>
            </a> */}
        <a href="/contact" className="footerLink">
          <Typography style={linkStyle}>Contact</Typography>
        </a>
      </div>
      <Typography style={{ textAlign: "center", marginBottom: 15 }}>
        2022 ©HugYoHoodInc. All Rights Reserved.
      </Typography>
    </div>
  );
};
export default Footer;
