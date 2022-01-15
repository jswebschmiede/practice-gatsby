import React from "react";
import { Helmet } from "react-helmet";

const Seo = props => {
  return (
    <Helmet defaultTitle="Simple Recipes" titleTemplate="Simple Recipes - %s">
      <html lang="en" amp />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Helmet>
  );
};

export default Seo;
