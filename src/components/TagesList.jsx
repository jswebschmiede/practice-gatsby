import { Link } from "gatsby";
import React from "react";
import slugify from "slugify";
import { setupTags } from "./utils/setupTags";

const TagesList = ({ recipes = [] }) => {
  const tagsArray = setupTags(recipes);

  return (
    <div className="tracking-widest">
      <h3 className="text-2xl font-semibold mb-4">Recipes</h3>
      <ul className="grid grid-cols-3 sm:grid-cols-1">
        {tagsArray.map((tag, index) => {
          const tagSlug = slugify(tag.value, { lower: true });

          return (
            <li
              key={index}
              className="text-gray-500 first-letter:uppercase text-xl mb-2"
            >
              <Link className="hover:text-violet-500" to={`/tags/${tagSlug}`}>
                {tag.value} ({tag.count})
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TagesList;
