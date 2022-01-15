import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="bg-slate-700 pt-6 pb-6 mt-4 flex items-center justify-center text-white">
      <p className="text-lg">
        &copy; 2021 <Link to="/">SimpleRecipes</Link>. Built with{" "}
        <a href="https://www.gatsbyjs.com/" rel="noreferrer" target="_blank">
          Gatsby
        </a>
      </p>
    </footer>
  );
};

export default Footer;
