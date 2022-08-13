import { Helmet } from "react-helmet";

export const HomepageMetaTags = () => {
  return (
    <Helmet>
      <meta
        name="description"
        content="Kansas City Homeless Union (KCHU) is a union of unhoused Kansas Citians, actively seeking equality and equity, and fighting against the system that perpetuates and sustains homelessness."
        data-react-helmet="true"
      />
      <meta
        property="og:title"
        content="KC Homeless Union"
        data-react-helmet="true"
      />
      <meta
        property="og:description"
        content="Kansas City Homeless Union (KCHU) is a union of unhoused Kansas Citians, actively seeking equality and equity, and fighting against the system that perpetuates and sustains homelessness."
        data-react-helmet="true"
      />
      <meta
        property="og:image:url"
        content="https://kchomelessunion.org/assets/negotiations.jpg"
        data-react-helmet="true"
      />
      <meta
        property="og:url"
        content="https://kchomelessunion.org/"
        data-react-helmet="true"
      />
      <meta
        property="og:image:secure_url"
        content="https://kchomelessunion.org/assets/negotiations.jpg"
        data-react-helmet="true"
      />
      <meta
        property="twitter:card"
        content="summary_large_image"
        data-react-helmet="true"
      />
      <meta
        property="twitter:site"
        content="@kchomelessunion"
        data-react-helmet="true"
      />
      <meta
        name="twitter:title"
        content="KC Homeless Union"
        data-react-helmet="true"
      />
      <meta
        name="twitter:description"
        content="Kansas City Homeless Union (KCHU) is a union of unhoused Kansas Citians, actively seeking equality and equity, and fighting against the system that perpetuates and sustains homelessness."
        data-react-helmet="true"
      />
      <meta
        name="twitter:image"
        content="https://kchomelessunion.org/assets/negotiations.jpg"
        data-react-helmet="true"
      />
      <meta
        name="twitter:image:alt"
        content="Union members negotiating with Mayor Quinton Lucas of Kansas City, MO, April 6, 2021"
        data-react-helmet="true"
      />
    </Helmet>
  );
};
