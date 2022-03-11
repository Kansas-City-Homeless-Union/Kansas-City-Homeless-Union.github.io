import React, { useState } from "react";
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
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<any>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(e.target);
  };

  return (
    <div style={{ marginBottom: 75 }}>
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/" style={link}>
                  <Typography>Home</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/whoweare" style={link}>
                  <Typography>Who We Are</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/resources" style={link}>
                  <Typography>Resources</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/contact" style={link}>
                  <Typography>Contact</Typography>
                </Link>
              </MenuItem>
            </Menu>
            <Typography style={{ margin: "auto" }} variant="h5">
              KC Homeless Union
            </Typography>
            <SocialIcon
              url="https://www.facebook.com/kchomelessunion"
              target="_blank"
              style={{ marginRight: 15 }}
            />
            <SocialIcon
              url="https://twitter.com/kchomelessunion"
              target="_blank"
              style={{ marginRight: 15 }}
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
