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
  const [resizeFired, setResizeFired] = useState<boolean>(false);

  const socialIconStyle = {
    marginLeft: 15,
    width: window.innerWidth > 500 ? 45 : 35,
    height: window.innerWidth > 500 ? 45 : 35,
  };

  const navHeaderText = window.innerWidth > 425 ? "KC Homeless Union" : "KCHU";

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

    if (resizeFired || winScroll > heightToHideFrom) {
        headerLarge &&      // to limit setting state only the first time
        window.innerWidth > 425 &&
        setHeaderLarge(false);
    } else {
        setHeaderLarge(true);
    }
  };

  // If resizing ever happens we are just going to make the header small just in case
  const listenToResize = () => {
    setResizeFired(true);
    listenToScroll();
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    window.addEventListener("scroll", listenToScroll);
    return () =>
        window.removeEventListener("scroll", listenToScroll);
  }, [])

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
                          <Link to="/causes" style={link}>
                              <MenuItem onClick={handleCloseNavMenu}>
                                  <Typography>What causes homelessness?</Typography>
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
                      {/* <Typography style={{ margin: "auto" }} variant={ headerLarge ? "h1" : "h5" }> */}
                          <Typography style={{ margin: "auto", fontSize: headerLarge ? "5em" : "3em" }} component="h1" className="font-transition">
                              {navHeaderText}
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
