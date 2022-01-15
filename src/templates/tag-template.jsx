import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Ui/Layout";
import RecipesList from "../components/RecipesList";
import Seo from "../components/Seo";

const TagTemplate = ({ data = [], pageContext }) => {
  const tagData = data.allContentfulRecipe.nodes;

  return (
    <Layout>
      <Seo
        title={`${pageContext.tag} - Recipes`}
        description="the best Recipes on the planet"
      />
      <section className="tagData-page px-4">
        <h1 className="text-3xl font-semibold mb-8 tracking-widest first-letter:uppercase">
          {pageContext.tag} - Recipes
        </h1>

        <RecipesList recipes={tagData} />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query GetRecipesTags($tag: String = "") {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`;

export default TagTemplate;
