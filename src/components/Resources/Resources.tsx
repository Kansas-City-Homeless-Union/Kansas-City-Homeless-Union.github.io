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
    backgroundColor: "#f7f7f7",
  },
};

const accordionHeaderProps = {
  variant: "h5" as "h5",
};

const HorizontalHeaderLine = () => (
  <div
    style={{
      borderBottom: "1px solid grey",
      marginLeft: 16,
      marginRight: 16,
      marginBottom: 5,
      marginTop: -5,
    }}
  />
);

const Resources = () => {
  return (
    <div>
      <Typography variant="h4" style={{ marginBottom: 25 }}>
        Resources
      </Typography>
      <Accordion {...accordionProps}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography {...accordionHeaderProps}>Housing</Typography>
        </AccordionSummary>
        <HorizontalHeaderLine />
        <AccordionDetails>
          <ResourceCard
            title="Restart Inc"
            website="https://www.restartinc.org/"
            hours="Open 24 hours"
            phone="(816) 842-1199"
            description1={`"For 40 years, reStart has provided Kansas City’s most vulnerable population with a continuum of housing services. Our unique programming allows us to act as the only homeless agency in Kansas City serving all homeless populations including singles, families, couples, individuals experiencing mental health illnesses, LGBTQ+ identifying individuals, veterans, unaccompanied youth, non-traditional families and persons with HIV/AIDS.`}
            description2={`Our organization’s culture of inclusion allows us to provide services to everyone at risk or currently experiencing homelessness. We accept people as they are and don’t require those asking for help to attest to a differing belief, religious affiliation, or traditional family structure."`}
          />
          <ResourceCard
            title="Restart Inc"
            website="https://www.restartinc.org/"
            hours="Open 24 hours"
            phone="(816) 842-1199"
            email="restart@restartinc.org"
            description1={`"For 40 years, reStart has provided Kansas City’s most vulnerable population with a continuum of housing services. Our unique programming allows us to act as the only homeless agency in Kansas City serving all homeless populations including singles, families, couples, individuals experiencing mental health illnesses, LGBTQ+ identifying individuals, veterans, unaccompanied youth, non-traditional families and persons with HIV/AIDS."`}
          />
          <ResourceCard
            title="Restart Inc"
            website="https://www.restartinc.org/"
            hours="Open 24 hours"
            phone="(816) 842-1199"
            showBottomLine={false}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion {...accordionProps}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography {...accordionHeaderProps}>Food</Typography>
        </AccordionSummary>
        <HorizontalHeaderLine />
        <AccordionDetails>
          <ResourceCard
            title="Restart Inc"
            website="https://www.restartinc.org/"
            description1={`"For 40 years, reStart has provided Kansas City’s most vulnerable population with a continuum of housing services. Our unique programming allows us to act as the only homeless agency in Kansas City serving all homeless populations including singles, families, couples, individuals experiencing mental health illnesses, LGBTQ+ identifying individuals, veterans, unaccompanied youth, non-traditional families and persons with HIV/AIDS."`}
          />
          <ResourceCard
            title="Restart Inc"
            website="https://www.restartinc.org/"
            showBottomLine={false}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion {...accordionProps}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography {...accordionHeaderProps}>Clothes</Typography>
        </AccordionSummary>
        <HorizontalHeaderLine />
        <AccordionDetails>
          <ResourceCard
            title="Restart Inc"
            website="https://www.restartinc.org/"
            hours="Open 24 hours"
            phone="(816) 842-1199"
            email="someEmail@email.com"
          />
          <ResourceCard
            title="Restart Inc"
            website="https://www.restartinc.org/"
            hours="Open 24 hours"
            phone="(816) 842-1199"
            description1={`"For 40 years, reStart has provided Kansas City’s most vulnerable population with a continuum of housing services. Our unique programming allows us to act as the only homeless agency in Kansas City serving all homeless populations including singles, families, couples, individuals experiencing mental health illnesses, LGBTQ+ identifying individuals, veterans, unaccompanied youth, non-traditional families and persons with HIV/AIDS."`}
            showBottomLine={false}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion {...accordionProps}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography {...accordionHeaderProps}>Healthcare</Typography>
        </AccordionSummary>
        <HorizontalHeaderLine />
        <AccordionDetails>
          <ResourceCard
            title="Restart Inc"
            website="https://www.restartinc.org/"
            hours="Open 24 hours"
            phone="(816) 842-1199"
            showBottomLine={false}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion {...accordionProps}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography {...accordionHeaderProps}>Mental Health</Typography>
        </AccordionSummary>
        <HorizontalHeaderLine />
        <AccordionDetails>
          <ResourceCard
            title="Restart Inc"
            website="https://www.restartinc.org/"
            hours="Open 24 hours"
            phone="(816) 842-1199"
            showBottomLine={false}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Resources;
