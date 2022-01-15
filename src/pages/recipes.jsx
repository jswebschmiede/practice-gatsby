import React from "react";
import AllRecipes from "../components/AllRecipes";
import Layout from "../components/Ui/Layout";
import Seo from "../components/Seo";

const RecipesPage = () => {
  return (
    <Layout>
      <Seo title="Recipes Page" description="the best Recipes on the planet" />
      <section className="recipes-page px-4">
        <h1 className="text-3xl font-semibold mb-8 tracking-widest">
          All awesome Recipes
        </h1>
        <AllRecipes />
      </section>
    </Layout>
  );
};

export default RecipesPage;
