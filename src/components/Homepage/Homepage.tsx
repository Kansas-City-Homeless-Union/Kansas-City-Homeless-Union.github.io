import React from "react";
import { Typography, Box } from "@mui/material";
import { contactLinks, demandStyle } from "./Homepage.styles";
// import bothMayorQs from "./bothMayorQs.png";

const Homepage = () => {
  // turn contact into a footer?
  // where to add an image
  // show facebook feed https://developers.facebook.com/docs/plugins/page-plugin/
  return (
    <Box>
      {/* <img
          src={bothMayorQs}
          alt="KCHU later Qadhafi speaking to KC Mayor Quinton Lucas"
          width={500}
        /> */}
      <Typography variant="h4">OUR DEMANDS</Typography>
      <Typography variant="h6" style={demandStyle}>
        Demand 1
      </Typography>
      <Typography variant="h6" style={demandStyle}>
        Demand 2
      </Typography>
      <Typography variant="h6" style={demandStyle}>
        Demand 3
      </Typography>
      <Typography variant="h6" style={demandStyle}>
        Demand 4
      </Typography>
      {/* <List sx={{ listStyleType: "disc", border: "3px solid black" }}>
          <ListSubheader
            sx={{
              fontWeight: 700,
              lineHeight: "24px",
              fontSize: "16px",
              color: "black",
            }}
          >
            Search Help
          </ListSubheader>
          <ListItem sx={{ display: "list-item" }}>
            Double check your spelling
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Your search may have been removed or is not yet in the system
          </ListItem>
        </List> */}
      <Typography style={{ marginTop: 20 }}>
        Some kind of mission statement here. Safe, affordable housing for all,
        etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
        tortor dolor. Integer sodales tincidunt faucibus. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Duis ligula tellus, sagittis ac nulla
        vitae, consequat porta nibh. Mauris eleifend enim ex, a euismod nulla
        elementum non. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Nullam non luctus neque, a tincidunt
        tellus. Integer rutrum erat vitae risus tincidunt elementum. Phasellus
        posuere purus laoreet pretium malesuada. Sed convallis pellentesque
        viverra.
      </Typography>
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" style={{ marginTop: 20 }}>
          Contact
        </Typography>
        <a href="mailto:MayorQ@kcmo.org" style={contactLinks}>
          Mayor Quinton Lucas
        </a>
        <a href="mailto:manager@kcmo.org" style={contactLinks}>
          City Manager Brian Platt
        </a>
        <a href="mailto:example@gmail.com" style={contactLinks}>
          and other people we want our demands being made to
        </a>
      </Box>
    </Box>
  );
};

export default Homepage;
