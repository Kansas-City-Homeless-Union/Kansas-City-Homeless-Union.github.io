import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import ResourceCard from "../ResourceCard/ResourceCard";

// housing, food, clothes, healthcare, mental health

const Resources = () => {
  // card with links, don't put raw phone numbers/emails up
  return (
    <div>
      <Typography variant="h4" style={{ marginBottom: 25 }}>
        Resources
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Housing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ResourceCard
            title="Restart Inc"
            website="https://www.restartinc.org/"
            hours="Open 24 hours"
            phone="(816) 842-1199"
          />
          <ResourceCard
            title="Restart Inc"
            website="https://www.restartinc.org/"
            hours="Open 24 hours"
            phone="(816) 842-1199"
          />
          <ResourceCard
            title="Restart Inc"
            website="https://www.restartinc.org/"
            hours="Open 24 hours"
            phone="(816) 842-1199"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Food</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ResourceCard
            title="Restart Inc"
            website="https://www.restartinc.org/"
            hours="Open 24 hours"
            phone="(816) 842-1199"
          />
          <ResourceCard
            title="Restart Inc"
            website="https://www.restartinc.org/"
            hours="Open 24 hours"
            phone="(816) 842-1199"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Clothes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ResourceCard
            title="Restart Inc"
            website="https://www.restartinc.org/"
            hours="Open 24 hours"
            phone="(816) 842-1199"
          />
          <ResourceCard
            title="Restart Inc"
            website="https://www.restartinc.org/"
            hours="Open 24 hours"
            phone="(816) 842-1199"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Healthcare</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ResourceCard
            title="Restart Inc"
            website="https://www.restartinc.org/"
            hours="Open 24 hours"
            phone="(816) 842-1199"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Mental Health</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ResourceCard
            title="Restart Inc"
            website="https://www.restartinc.org/"
            hours="Open 24 hours"
            phone="(816) 842-1199"
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Resources;
