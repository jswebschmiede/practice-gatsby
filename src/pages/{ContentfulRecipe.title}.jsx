import React from "react";
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";
import slugify from "slugify";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Ui/Layout";
import Seo from "../components/Seo";

const RecipeTemplate = ({ data }) => {
  const recipe = data.contentfulRecipe;
  const pathToImage = getImage(recipe.image);

  return (
    <Layout>
      <Seo title={recipe.title} description={recipe.description.description} />
      <section className="home-page px-4">
        <section className="flex flex-wrap items-center -mx-2 mb-12">
          <div className="w-full pl-2 pr-2 sm:pr-8 sm:w-6/12">
            <GatsbyImage
              className="rounded"
              image={pathToImage}
              alt={recipe.title}
            />
          </div>
          <div className="w-full px-2 sm:w-6/12">
            <h1 className="text-3xl font-semibold mb-8 tracking-widest">
              {recipe.title}
            </h1>
            <p>{recipe.description.description}</p>

            <div className="grid grid-cols-3 gap-6 text-center my-10">
              <div>
                <BsClock className="mx-auto" size={25} />
                <p>Prep Time</p>
                <p>{recipe.prepTime}</p>
              </div>
              <div>
                <BsClockHistory className="mx-auto" size={25} />
                <p>Cook Time</p>
                <p>{recipe.cookTime}</p>
              </div>
              <div>
                <BsPeople className="mx-auto" size={25} />
                <p>Serving</p>
                <p>{recipe.serving}</p>
              </div>
            </div>

            <div className="flex">
              Tags:
              {recipe.content.tags.map((tag, index) => {
                const tagSlug = slugify(tag, { lower: true });
                return (
                  <div key={index} className="first-letter:uppercase">
                    <Link
                      className="px-3 py-1 rounded bg-violet-600 hover:bg-violet-500 text-white mx-2"
                      key={index}
                      to={`/tags/${tagSlug}`}
                    >
                      {tag}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="flex flex-wrap -mx-2 mb-12">
          <div className="w-full pl-2 pr-2 sm:pr-8 sm:w-8/12">
            <h3 className="text-xl tracking-widest mb-6">Instructions</h3>
            {recipe.content.instructions.map((instruction, index) => {
              return (
                <div
                  className="border-b-2 border-violet-500/20 mb-4"
                  key={index}
                >
                  <h3 className="text-lg uppercase text-violet-500 ">
                    Step {index + 1}
                  </h3>
                  <p className="mb-4">{instruction}</p>
                </div>
              );
            })}
          </div>
          <div className="w-full px-2 sm:w-4/12">
            <h3 className="text-xl tracking-widest mb-6">Ingredients</h3>

            {recipe.content.ingredients.map((ingredient, index) => {
              return (
                <div key={index}>
                  <p key={index} className="mb-6">
                    {ingredient}
                  </p>
                </div>
              );
            })}

            <h3 className="text-xl tracking-widest mb-6 ">Tools</h3>
            {recipe.content.tools.map((tool, index) => {
              return (
                <div key={index}>
                  <p
                    key={index}
                    className="first-letter:uppercase mb-4 text-violet-500"
                  >
                    {tool}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      prepTime
      serving
      cookTime
      description {
        description
      }
      content {
        tags
        instructions
        ingredients
        tools
      }
      image {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
    }
  }
`;

export default RecipeTemplate;
