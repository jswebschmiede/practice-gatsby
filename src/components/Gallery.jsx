import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const query = graphql`
  {
    allFile(
      filter: { sourceInstanceName: { eq: "images" }, extension: { ne: "svg" } }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: false }
            width: 200
            height: 200
          )
        }
      }
    }
  }
`;

const Gallery = () => {
  const data = useStaticQuery(query);
  const images = data.allFile.nodes;

  return (
    <div>
      <h1>Gallery</h1>
      <div className="flex gap-3 flex-wrap">
        {images.map((image, index) => {
          const pathToImage = getImage(image);
          return (
            <div className="" key={index}>
              <GatsbyImage className="" image={pathToImage} alt={image.name} />
              <p>{image.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
