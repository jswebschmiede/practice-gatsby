import React from "react";
import Layout from "../components/Ui/Layout";
import Button from "../components/Ui/Button";
import { StaticImage } from "gatsby-plugin-image";
import RecipesList from "../components/RecipesList";
import { graphql } from "gatsby";
import Seo from "../components/Seo";

const AboutPage = ({ data = [] }) => {
  const recipes = data.allContentfulRecipe.nodes;

  return (
    <Layout>
      <Seo
        title="About Page"
        description="About us the creator of the best Recipes on the planet"
      />

      <section className="about-page px-4">
        <div className="flex flex-wrap items-center -mx-2 mb-12">
          <article className="w-full px-2 md:w-1/2 text-lg mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold tracking-widest mb-4">
              About the Authors - <br /> Lorem Ipsum
            </h2>
            <p className="mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              sed sit tempora incidunt, corporis iste odio aperiam quasi aliquam
              excepturi. Corrupti, illum delectus est voluptatibus error quae
              quisquam dolor minus.
            </p>
            <p className="mb-4">
              Corrupti, illum delectus est voluptatibus error quae quisquam
              dolor minus.
            </p>
            <p>
              <Button className="bg-violet-500 mt-4">Contact</Button>
            </p>
          </article>
          <article className="w-full px-2 md:w-1/2">
            <StaticImage
              placeholder="tracedSVG"
              className="object-cover h-auto md:h-96 rounded-md"
              src="../assets/images/about.jpeg"
              alt=""
            />
          </article>
        </div>

        <h3 className="text-2xl text-center font-semibold tracking-widest mb-4">
          Look at this awesome Recipes
        </h3>
        <RecipesList small={true} recipes={recipes} />
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featerd: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default AboutPage;
