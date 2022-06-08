import React, { useEffect, useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { link } from "./NavBar.styles";
import               "./NavBar.css";
import { SocialIcon } from "react-social-icons";


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<any>(null);
  const [headerLarge, setHeaderLarge] = useState<boolean>(true);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const socialIconStyle = {
    marginLeft: 15,
    width: window.innerWidth > 500 ? 45 : 35,
    height: window.innerWidth > 500 ? 45 : 35,
  };

  const navHeaderText = () => windowWidth > 1000 ? "KC Homeless Union" : "KCHU";

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(e.target);
  };

  const listenToScroll = () => {
    const heightToHideFrom = 50;
    const winScroll = document.body.scrollTop ||
                      document.documentElement.scrollTop;

    if (windowWidth || winScroll > heightToHideFrom) {
        headerLarge &&      // to limit setting state only the first time
        setHeaderLarge(false);
    } else {
        setHeaderLarge(true);
    }
  };

  const listenToResize = () => setWindowWidth(window.innerWidth);

  const HeaderText = () => <a href="/" style={{ textDecoration: "none", color: "white" }}>{navHeaderText()}</a>;


  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    window.addEventListener("resize", listenToResize);
      return () => {
        window.removeEventListener("scroll", listenToScroll);
        window.removeEventListener("resize", listenToResize);
    }
  })

  return (
      <div style={{ marginBottom: 75 + (headerLarge ? 50 : 0)}}>
          <AppBar>
              <Container>
                  <Toolbar disableGutters style={{ maxWidth: "unset" }}>
                      <IconButton
                          size="large"
                          aria-label="open navigation menu"
                          aria-controls="menu-appbar"
                          aria-haspopup
                          onClick={handleOpenNavMenu}
                          color="inherit"
                      >
                          <MenuIcon />
                      </IconButton>
                      <Menu
                          anchorEl={anchorElNav}
                          anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "left",
                          }}
                          keepMounted
                          transformOrigin={{
                              vertical: "top",
                              horizontal: "left",
                          }}
                          open={!!anchorElNav}
                          onClose={handleCloseNavMenu}
                      >
                          <Link to="/" style={link}>
                              <MenuItem onClick={handleCloseNavMenu}>
                                  <Typography>Home</Typography>
                              </MenuItem>
                          </Link>
                          <Link to="/whoweare" style={link}>
                              <MenuItem onClick={handleCloseNavMenu}>
                                  <Typography>Who We Are</Typography>
                              </MenuItem>
                          </Link>
                          <Link to="/membership" style={link}>
                              <MenuItem onClick={handleCloseNavMenu}>
                                  <Typography>Membership</Typography>
                              </MenuItem>
                          </Link>
                          <Link to="/causes" style={link}>
                              <MenuItem onClick={handleCloseNavMenu}>
                                  <Typography>What Causes Homelessness?</Typography>
                              </MenuItem>
                          </Link>
                          <Link to="/resources" style={link}>
                              <MenuItem onClick={handleCloseNavMenu}>
                                  <Typography>Resources</Typography>
                              </MenuItem>
                          </Link>
                          <Link to="/contact" style={link}>
                              <MenuItem onClick={handleCloseNavMenu}>
                                  <Typography>Contact</Typography>
                              </MenuItem>
                          </Link>
                      </Menu>
                      <Typography style={{ margin: "auto", fontSize: headerLarge ? "5em" : "3em" }} component="h1" className="font-transition">
                          {/* <a href="/" style={{ textDecoration: "none", color: "white" }}>{navHeaderText(window.innerWidth, windowWidth)}</a> */}
                          <HeaderText />
                      </Typography>
                          <SocialIcon
                              url="https://www.facebook.com/kchomelessunion"
                              target="_blank"
                              style={socialIconStyle}
                              fgColor="#f7f7f7"
                          />
                          <SocialIcon
                              url="https://twitter.com/kchomelessunion"
                              target="_blank"
                              style={socialIconStyle}
                              fgColor="#f7f7f7"
                          />
                          {/* <SocialIcon
                              url="https://instagram.com/kchomelessunion"
                              target="_blank"
                              /> */}
                  </Toolbar>
              </Container>
          </AppBar>
      </div>
  );
};
export default Navbar;
