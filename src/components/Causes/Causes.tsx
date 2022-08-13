import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { orderedListItemStyle, textMargin } from "./Causes.styles";

const FootNote = ({ url, linkText }: { url: string; linkText: string }) => {
  return (
    <li style={orderedListItemStyle}>
      <a href={url} rel="noopener noreferrer" target="_blank">
        {linkText}
      </a>
    </li>
  );
};

const Causes = () => {
  // Editors note: these counts will be off in dev mode by a factor of 2 b/c in dev mode
  // react calls component function bodies twice to check for side effects during development.
  // This is fine in a production build
  let superCount = 1;
  const Superscript = () => {
    return <sup>{superCount++}</sup>;
  };

  return (
    <div style={{ textAlign: "left" }}>
      <Typography variant="h4" component="h2" style={{ marginBottom: 25 }}>
        What Causes Homelessness?
      </Typography>
      <Typography style={textMargin}>
        Many people are under the false impression that homelessness is a result
        of laziness or a sense of entitlement. That the homeless would rather
        sit back and accept handouts or do drugs rather than contribute to their
        communities. This is patently false.
      </Typography>
      <Typography style={textMargin}>
        In fact, a great many Americans might not realize how close they are to
        homelessness. One serious medical bill, one unexpected expense, one
        disabling condition, and many would be in our position: unable to afford
        housing and cast out coldly onto the street.
      </Typography>
      <Typography style={textMargin}>
        Furthermore, roughly 17% of homeless adults are employed (2012
        Conference of Mayors Report). So, what causes homelessness? Here are
        just a few things.
      </Typography>
      <List>
        <ListItem>
          <Typography style={textMargin}>
            <strong>Medical conditions and Mental Illness</strong> which
            preclude the ability to work. About twenty-five percent of all
            homeless people in the United States are seriously mentally ill
            <Superscript /> and many are afflicted with medical conditions which
            either cause homelessness or make leaving the state of homelessness
            difficult
            <Superscript />. Furthermore, certain people are so medically
            fragile that only specific shelters will accept them or even can
            render aid at all.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography style={textMargin}>
            <strong>Sudden and unexpected expenses</strong> People’s budgets are
            often tight, so sudden expenses can cripple a household, especially
            if the expense is related to your ability to get to work. Car breaks
            down and you can’t afford to fix it? You might not be able to get to
            work. Medical expenses are especially tough, and some people are
            having to decide between paying their medical expenses (if they can
            at all) and other necessities, such as food and shelter.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography style={textMargin}>
            <strong>Inadequate Family Support</strong> Many homeless people were
            cast out from their homes by their own family, and this is
            tragically true of many children who are homeless. Many people are
            cast out because of their sexual/gender identity or preferences
            <Superscript />.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography style={textMargin}>
            <strong>Abuse</strong> Abusive situations are terrible and occur far
            too often. In the cases of domestic abuse, many abuse victims do not
            have a safe place to go to take shelter from their abuser, and this
            is especially problematic and difficult if children are involved.
            Sometimes they must make the decision to stay in this abusive
            situation or run from their abuser(s) with nowhere to go. Those that
            run face the threat of homelessness
            <Superscript />. Victims of domestic violence account for roughly
            25% of homeless people in Missouri.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography style={textMargin}>
            <strong>Lack of Affordable Housing</strong> Putting a roof over your
            head is expensive, and not everyone can afford to do so even if they
            are employed. Rent is high and rising and home ownership is all but
            a dream for an unacceptably high proportion of the population.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography style={textMargin}>
            <strong>Lack of Sufficient Social Welfare</strong> National SSI
            (Supplemental Security Income) benefits are capped at $841.00 per
            month, and many other benefits that aid the housing insecure (SNAP,
            HUD, TANAF, WIC, MEDICAID, &ct.) do not pay enough to sufficiently
            help, do not sufficiently cover enough people (some states have not
            enacted MEDICAID expansion), are not funded or staffed enough to
            provide sufficient service, or force people to stay impoverished
            through the use of strict income guidelines.
          </Typography>
        </ListItem>
      </List>
      <ol style={{ borderTop: "1px solid", textAlign: "left" }}>
        <FootNote
          url="https://files.hudexchange.info/reports/published/CoC_PopSub_NatlTerrDC_2021.pdf"
          linkText="HUD 2021 Continuum of Care Homeless Assistance Programs Homeless
          Populations and Subpopulations."
        />
        <FootNote
          url="https://www.ncbi.nlm.nih.gov/books/NBK218236/"
          linkText="https://www.ncbi.nlm.nih.gov/books/NBK218236/"
        />
        <FootNote
          url="https://www.thetrevorproject.org/research-briefs/homelessness-and-housing-instability-among-lgbtq-youth-feb-2022/"
          linkText="https://www.thetrevorproject.org/research-briefs/homelessness-and-housing-instability-among-lgbtq-youth-feb-2022/"
        />
        <FootNote
          url="https://www.aclu.org/sites/default/files/pdfs/dvhomelessness032106.pdf"
          linkText="https://www.aclu.org/sites/default/files/pdfs/dvhomelessness032106.pdf"
        />
        <FootNote
          url="https://files.hudexchange.info/reports/published/CoC_PopSub_State_MO_2021.pdf"
          linkText="https://files.hudexchange.info/reports/published/CoC_PopSub_State_MO_2021.pdf"
        ></FootNote>
        <FootNote
          url="https://www.ssa.gov/OACT/COLA/SSI.html"
          linkText="https://www.ssa.gov/OACT/COLA/SSI.html"
        />
      </ol>
    </div>
  );
};

export default Causes;
