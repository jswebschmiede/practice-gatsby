import React from "react";
import Layout from "../components/Ui/Layout";
import { StaticImage } from "gatsby-plugin-image";
import AllRecipes from "../components/AllRecipes";
import Seo from "../components/Seo";

export default function HomePage() {
  return (
    <Layout>
      <Seo title="Home Page" description="the best Recipes on the planet" />
      <section className="home-page px-4">
        <header className="h-[40vh] relative mb-8 bg-blend-darken">
          <StaticImage
            className="h-full opacity-90"
            placeholder="tracedSVG"
            layout="fullWidth"
            src="../assets/images/main.jpeg"
            alt=""
          />
          <div className="absolute w-full h-full top-0 left-0 flex bg-black/40 items-center justify-center">
            <div className="tracking-widest text-center text-white">
              <h1 className="text-6xl font-semibold mb-2">Simply Recipes</h1>
              <h3 className="text-2xl">No Fluff, Just Recipes</h3>
            </div>
          </div>
        </header>

        <AllRecipes />
      </section>
    </Layout>
  );
}
