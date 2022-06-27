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
import { link } from "./NavBar.styles";
import               "./NavBar.css";
import { SocialIcon } from "react-social-icons";

const iconStyles = {
    small: {
        marginLeft: 15,
        width: 35,
        height: 35,
    },
    large: {
        marginLeft: 15,
        width: 45,
        height: 45,
    }
};
/* const debounce = (fn, ms) => {
 *     let timer: any;
 *     return () => {
 *         clearTimeout(timer);
 *         timer = setTimeout(() => {
 *             timer = null;
 *             fn.apply(this);
 *         }, ms)
 *     };
 * } */

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<any>(null);
  const [headerLarge, setHeaderLarge] = useState<boolean>(true);
  const [windowDimensions, setWindowDimensions] = useState<any>({ width: 500, height: 500, initialized: false});

  const navHeaderText = () => {
      return windowDimensions.width > 1000 ? "KC Homeless Union" : "KCHU";
  }
  const socialIconStyle = () => {
      return windowDimensions.width > 500 ? iconStyles.large : iconStyles.small;
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(e.target);
  };

  const shrinkHeader = () => {
    const heightToHideFrom = 50;
    const winScroll = document.body.scrollTop ||
                      document.documentElement.scrollTop;

    if (window.innerWidth || winScroll > heightToHideFrom) {
        headerLarge &&      // to limit setting state only the first time
        setHeaderLarge(false);
    } else {
        setHeaderLarge(true);
    }
  };

  const setCurrentWindowDimensions = () => {
      setWindowDimensions({width: window.innerWidth, height: window.innerHeight, initialized: true});
  };

  const HeaderText = () => <a href="/" style={{ textDecoration: "none", color: "white" }}>{navHeaderText()}</a>;

  useEffect(() => {
    if(!windowDimensions.initialized) {
        setCurrentWindowDimensions();
    }
    window.addEventListener("scroll", shrinkHeader);
    window.addEventListener("resize", setCurrentWindowDimensions);
      return () => {
        window.removeEventListener("scroll", shrinkHeader);
        window.removeEventListener("resize", setCurrentWindowDimensions);
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
                          <a href="/" style={link}>
                              <MenuItem onClick={handleCloseNavMenu}>
                                  <Typography>Home</Typography>
                              </MenuItem>
                          </a>
                          {/* <a href="/whoweare" style={link}>
                              <MenuItem onClick={handleCloseNavMenu}>
                              <Typography>Who We Are</Typography>
                              </MenuItem>
                              </a> */}
                          <a href="/membership" style={link}>
                              <MenuItem onClick={handleCloseNavMenu}>
                                  <Typography>Membership</Typography>
                              </MenuItem>
                          </a>
                          <a href="/news" style={link}>
                              <MenuItem onClick={handleCloseNavMenu}>
                                  <Typography>News</Typography>
                              </MenuItem>
                          </a>
                          <a href="/causes" style={link}>
                              <MenuItem onClick={handleCloseNavMenu}>
                                  <Typography>What Causes Homelessness?</Typography>
                              </MenuItem>
                          </a>
                          {/* <a href="/resources" style={link}>
                              <MenuItem onClick={handleCloseNavMenu}>
                              <Typography>Resources</Typography>
                              </MenuItem>
                              </a> */}
                          <a href="/contact" style={link}>
                              <MenuItem onClick={handleCloseNavMenu}>
                                  <Typography>Contact</Typography>
                              </MenuItem>
                          </a>
                      </Menu>
                      <Typography style={{ margin: "auto", fontSize: headerLarge ? "5em" : "3em" }} component="h1" className="font-transition">
                          {/* <a href="/" style={{ textDecoration: "none", color: "white" }}>{navHeaderText(window.innerWidth, windowWidth)}</a> */}
                          <HeaderText />
                      </Typography>
                          <SocialIcon
                              url="https://www.facebook.com/kchomelessunion"
                              target="_blank"
                              style={socialIconStyle()}
                              fgColor="#f7f7f7"
                          />
                          <SocialIcon
                              url="https://twitter.com/kchomelessunion"
                              target="_blank"
                              style={socialIconStyle()}
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
