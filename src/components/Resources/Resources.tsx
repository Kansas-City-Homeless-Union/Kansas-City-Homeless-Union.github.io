import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ResourceCard from "../ResourceCard/ResourceCard";

const accordionProps = {
  variant: "outlined" as "outlined",
  style: {
    marginBottom: 20,
    backgroundColor: "#f2f2f2",
    // color: "#f7f7f7",
  },
};

const accordionHeaderProps = {
  variant: "h5" as "h5",
};

const Resources = () => {
  // card with links, don't put raw phone numbers/emails up
  return (
    <div>
      <Typography variant="h4" style={{ marginBottom: 25 }}>
        Resources
      </Typography>
      <Accordion {...accordionProps}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography {...accordionHeaderProps}>Housing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ResourceCard
            title="Restart Inc"
            website="https://www.restartinc.org/"
            hours="Open 24 hours"
            phone="(816) 842-1199"
            description1="For 40 years, reStart has provided Kansas City’s most vulnerable population with a continuum of housing services. Our unique programming allows us to act as the only homeless agency in Kansas City serving all homeless populations including singles, families, couples, individuals experiencing mental health illnesses, LGBTQ+ identifying individuals, veterans, unaccompanied youth, non-traditional families and persons with HIV/AIDS."
            description2="Our organization’s culture of inclusion allows us to provide services to everyone at risk or currently experiencing homelessness. We accept people as they are and don’t require those asking for help to attest to a differing belief, religious affiliation, or traditional family structure."
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
      <Accordion {...accordionProps}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography {...accordionHeaderProps}>Food</Typography>
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
      <Accordion {...accordionProps}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography {...accordionHeaderProps}>Clothes</Typography>
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
      <Accordion {...accordionProps}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography {...accordionHeaderProps}>Healthcare</Typography>
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
      <Accordion {...accordionProps}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography {...accordionHeaderProps}>Mental Health</Typography>
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
