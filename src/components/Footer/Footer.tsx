import "./footer.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import * as styles from "./footer.styles";

const Footer = () => {
  return (
    <div style={styles.footerContainer}>
      <div style={styles.footerTopBorder} />
      <div style={styles.footerLinkContainer}>
        <Link to={"/"} className="footerLink">
          <Typography>Home</Typography>
        </Link>
        {/* <Link to={"/whoweare"} className="footerLink">
            <Typography >Who We Are</Typography>
            </Link> */}
        <Link to={"/membership"} className="footerLink">
          <Typography>Membership</Typography>
        </Link>
        <Link to={"/news"} className="footerLink">
          <Typography>News</Typography>
        </Link>
        <Link to={"/causes"} className="footerLink">
          <Typography>What Causes Homelessness?</Typography>
        </Link>
        {/* <Link to={"/resources"} className="footerLink">
            <Typography >Resources</Typography>
            </Link> */}
        <Link to={"/contact"} className="footerLink">
          <Typography>Contact</Typography>
        </Link>
      </div>
      <Typography style={styles.footerBottomLabelStyle}>
        2022 ©HugYoHoodInc. All Rights Reserved.
      </Typography>
    </div>
  );
};
export default Footer;
