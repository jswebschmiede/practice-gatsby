import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";
import { Link } from "gatsby";

const RecipesList = ({ recipes = [], small = false }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
      {recipes.map(recipe => {
        const pathToImage = getImage(recipe.image);
        const slug = slugify(recipe.title, { lower: true });
        return (
          <div key={recipe.id} className="mb-6 tracking-wider">
            <div
              className={small ? `h-[160px] relative` : `h-[220px] relative`}
            >
              <Link to={`/${slug}`}>
                <GatsbyImage
                  className="h-full rounded hover:opacity-80 transition-opacity"
                  image={pathToImage}
                  alt={recipe.title}
                />
              </Link>
            </div>
            <h5 className="font-bold text-lg mt-2">{recipe.title}</h5>
            <p className="text-gray-500 text-sm font-semibold">
              Prep: {recipe.prepTime} | Cook: {recipe.cookTime}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default RecipesList;
