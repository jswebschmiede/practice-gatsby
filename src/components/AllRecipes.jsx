import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import RecipesList from "./RecipesList";
import TagesList from "./TagesList";

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

const AllRecipes = () => {
  const data = useStaticQuery(query);
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <div className="flex flex-wrap -mx-2">
      <div className="w-full sm:w-3/12 px-2">
        <TagesList recipes={recipes} />
      </div>
      <div className="w-full sm:w-9/12 px-2">
        <RecipesList recipes={recipes} />
      </div>
    </div>
  );
};

export default AllRecipes;
