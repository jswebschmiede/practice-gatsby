import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Ui/Layout";

const Default404 = () => {
  return (
    <Layout pageTitle="404-Page not Found">
      <section className="flex justify-center flex-col text-center">
        <h1 className="text-8xl">404</h1>
        <h3 className="text-3xl mb-4">page not Found</h3>
        <Link to="/">back to Home</Link>
      </section>
    </Layout>
  );
};

export default Default404;
