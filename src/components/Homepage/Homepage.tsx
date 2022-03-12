import { Typography, Box } from "@mui/material";
import { demandStyle } from "./Homepage.styles";
import ImgWithCaption from "../ImgWithCaption/ImgWithCaption";
import stopTheSweepRally from "./stopTheSweepRally.jpg";
import { determineTextWidth } from "../../utils/determineTextWidth";

const Homepage = () => {
  return (
    <Box>
      <ImgWithCaption
        src={stopTheSweepRally}
        caption=""
        alt="Stop the Sweep Rally at City Hall"
        styleOverride={{ maxHeight: 350, maxWidth: "90%", marginBottom: 15 }}
      />
      <Typography
        style={{
          margin: "auto",
          marginBottom: 20,
          width: determineTextWidth(window.innerWidth),
        }}
      >
        Some kind of short mission statement here. Safe, affordable housing for
        all, etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam in tortor dolor. Integer sodales tincidunt faucibus. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <div>
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
      </div>
    </Box>
  );
};

export default Homepage;
