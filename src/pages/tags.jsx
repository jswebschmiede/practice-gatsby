import React from "react";
import { graphql, Link } from "gatsby";
import { setupTags } from "../components/utils/setupTags";
import Layout from "../components/Ui/Layout";
import Seo from "../components/Seo";
import slugify from "slugify";

const TagsPage = ({ data = [] }) => {
  const tags = data.allContentfulRecipe.nodes;
  const tagsArray = setupTags(tags);

  return (
    <Layout>
      <Seo
        title="Tags Page"
        description="Tags of the best Recipes on the planet"
      />
      <section className="tags-page px-4">
        <h1 className="text-3xl font-semibold mb-8 tracking-widest">
          All Tags
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tagsArray.map((tag, index) => {
            const tagSlug = slugify(tag.value, { lower: true });
            return (
              <Link
                to={`/tags/${tagSlug}`}
                key={index}
                className="px-4 py-4 rounded block transition-colors bg-violet-500 hover:bg-violet-600 text-center tracking-wider text-white first-letter:uppercase text-xl mb-2"
              >
                <span className="block text-lg font-semibold">{tag.value}</span>
                <span className="block text-sm">{tag.count} recipe</span>
              </Link>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default TagsPage;
