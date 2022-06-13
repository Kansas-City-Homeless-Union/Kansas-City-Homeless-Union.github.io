import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { parse }    from 'yaml';
import ResourceCard from "../ResourceCard/ResourceCard";
import rawDetails   from "./resourceDetails";

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

const resourceDetails : any = parse(rawDetails);

const Resources = () => {
  return (
      <div>
          <Typography variant="h4" component="h2" style={{ marginBottom: 25 }}>
              Resources
          </Typography>
              {
                  Object.keys(resourceDetails).map((sectionTitle: string, outerIndex: number) => {
                      let runningIndex = outerIndex * 100;
                      const idx = () => runningIndex++;
                      const details = resourceDetails[sectionTitle];
                      const resourceCards = details.map((resource : any, index: number) => <ResourceCard key={idx()} {...resource}/>);
                      return <Accordion key={idx()} {...accordionProps}><AccordionSummary expandIcon={<ExpandMore />}>
                          <Typography {...accordionHeaderProps}>{sectionTitle}</Typography>
                      </AccordionSummary>;
                      <HorizontalHeaderLine key={idx()} />
                      <AccordionDetails key={idx()}>{resourceCards}</AccordionDetails></Accordion>
                  })
              }
      </div>
  );
};

export default Resources;
