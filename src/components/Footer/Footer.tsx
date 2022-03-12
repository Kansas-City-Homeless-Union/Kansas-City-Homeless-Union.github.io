import "./footer.css";
import { AppBar, Typography, Slide } from "@mui/material";
import { Link } from "react-router-dom";

const HideOnScroll = ({ children, showFooter }: any) => {
  return (
    <Slide appear={false} direction="up" in={showFooter}>
      {children}
    </Slide>
  );
};

export interface IFooterProps {
  showFooter: boolean;
}

const Footer = ({ showFooter }: IFooterProps) => {
  const linkStyle = {
    marginRight: window.innerWidth < 500 ? 10 : 25,
    color: "#f7f7f7",
    textDecoration: "none",
  };

  return (
    <HideOnScroll showFooter={showFooter}>
      <AppBar
        sx={{
          top: "auto",
          bottom: 0,
          minHeight: 100,
          marginTop: 20,
          position: "fixed",
        }}
      >
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
      </AppBar>
    </HideOnScroll>
  );
};
export default Footer;
