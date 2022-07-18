import { Typography, Stack, Divider } from "@mui/material";
/* import { demandStyle } from "./Homepage.styles"; */
import ImgWithCaption from "../ImgWithCaption/ImgWithCaption";
import negotiations from "./negotiations.jpg";
/* import { determineTextWidth } from "../../utils/determineTextWidth"; */

const Homepage = () => {
  return (
    <Stack gap={3} divider={<Divider orientation="horizontal" flexItem />}>
      <ImgWithCaption
        src={negotiations}
        caption="Union members negotiating with Mayor Quinton Lucas of Kansas City, MO, April 6, 2021"
        alt="Union members and city officials seated at and standing around a picnic table."
        styleOverride={{ maxHeight: 350, maxWidth: "90%", marginBottom: 15 }}
      />
      <Typography variant="h2">Our Story</Typography>
      <Typography>
        The Kansas City Homeless Union was founded in January 2021 under the
        auspices of the{" "}
        <a href="https://kctenants.org/">Kansas City Tenants Union</a>. As a
        union by and for the homeless, we have petitioned the City Council,
        Mayor, and others for better conditions for the homeless of this city.
        In early 2021, we occupied the lawn of the KCMO City Hall to demand
        assistance from the city. We refused to lay beaten and unseen. To be
        seen is to be heard. They heard us loud and clear. The City’s response
        was false promises and half measures, moving some of us into hotels
        temporarily, but offering no real, lasting change and no long-term help.
        After we left the City Hall lawn, they showed their true colors: they
        put up a fence. Now the City Council wants to update their ordinances to
        make it so that anyone on city property who impedes pedestrian traffic
        is breaking the law, be it by setting up a tent, sleeping in a
        sleeping-bag, or just sitting too long. Their language may be obscured,
        but their message is clear: homelessness is a crime.
      </Typography>
      <Typography variant="h2">Our Mission</Typography>
      <Typography>
        The city is at war, not against homelessness, but against the homeless.
        We will not be silent. We demand to be heard. Our mission is nothing
        less than the end of homelessness in this City. This cannot and should
        not be done by simply moving us outside the city limits or imprisoning
        us. We will not be treated as an eyesore. This cannot be done by simply
        hiring people or companies to provide services. These people are in the
        business of homelessness. If there are no more homeless to “help”, they
        cannot make money. This conflict of interest is what hampers us. They do
        not want to end homelessness, they want to profit from it. Those closest
        to the problem are closest to the solution. We must be provided with
        social housing, job training, job opportunities, and adequate
        healthcare, but most importantly we need the opportunity to help
        ourselves. We must be treated as human beings. We are not criminals just
        because we do not have a place to live.
      </Typography>
      <Stack gap={2}>
        <Typography variant="h2">How to Help</Typography>
        <Typography component="h3" variant="h4">
          Hire Us!
        </Typography>
        <Typography>
          We have skills to be used. Some of us are electricians, some know
          construction. We are not lazy: we want to work! The Homeless Union is
          also a resource for the homeless to be hired, with payment going
          directly into the hands of the homeless and into this organization.
          Use our contact form to find out more.
        </Typography>
        <Typography component="h3" variant="h4">
          Donate
        </Typography>
        <Typography>
          You put money directly into the hands of the homeless without going
          through a third-party who profits from us. You can donate directly at{" "}
          <a href="https://cash.app/$hugyohoodinc">our cashapp</a>. This money
          is used to purchase supplies, such as food, water, and heating
          methods. It is also used for fuel costs used for transporting homeless
          people to and from their jobs (yes, many of us are employed, we just
          can’t afford a home). If you don’t want to give money for us to
          purchase supplies, you can provide the supplies yourself. You can
          bring them directly to a camp and we’ll take them and distribute them.
          The location of the camps is constantly changing, as the City prefers
          to clear us out rather than help us. Please use our Contact tab to
          inquire where a nearby camp is, and we’ll get back to you as soon as
          we can. Supplies we need include: canned food, potable water, razors,
          shaving cream, toothbrushes, toothpaste, feminine hygiene products,
          firewood, tents, sleeping bags, and sturdy trash bags. If you have a
          working phone that you aren’t using, we would gladly accept this
          donation.
        </Typography>
        <Typography component="h3" variant="h4">
          Vote
        </Typography>
        <Typography>
          Ask your potential councilman, mayor, or other politician what they
          will do to help end homelessness. Do not accept platitudes or
          hand-waving. If they do not want to create lasting change for the
          homeless, they do not deserve to be in a position of power.
        </Typography>
        <Typography component="h3" variant="h4">
          Volunteer
        </Typography>
        <Typography>
          There is always something to do. Trash pile-up is a serious problem in
          most homeless camps. Bringing trash bags, work gloves, and a truck to
          a homeless camp, bagging and taking trash, and then bringing them to
          the dump would help us enormously. Calling trash pile-up an eyesore
          and a hazard is a standard tactic the City uses to justify kicking us
          out and moving us out of the public eye. Some people even use homeless
          camps as an illegal dumping ground, placing the blame on us. There are
          also many services we need. If you’re a barber and can offer free
          haircuts, come on down. If you have access to clothes washing
          facilities, we need to wash our clothes the same as anyone else. If
          there is any service you can provide, contact us and we can see if
          your service can help our cause and people in general.
        </Typography>
        <Typography component="h3" variant="h4">
          DO NOT BE SILENT!
        </Typography>
        <Typography>
          One of our greatest enemies is apathy! Speak out and demand change! If
          you know a homeless camp is going to be swept (this means we will be
          forcibly removed), show up and voice your opposition. Write to your
          leaders and demand they take action.
        </Typography>
      </Stack>
      {/* <Typography
              style={{
              margin: "auto",
              marginBottom: 20,
              width: determineTextWidth(window.innerWidth),
              }}
              >
              </Typography> */}
      {/* <div>
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
              </div> */}
    </Stack>
  );
};

export default Homepage;
