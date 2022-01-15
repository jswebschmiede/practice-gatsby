import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = props => {
  return (
    <div className="max-w-6xl m-auto grid min-h-full grid-rows-[auto_1fr_auto] grid-cols-[100%]">
      <title>{props.pageTitle}</title>
      <Navbar />
      <main className="pt-6 pb-6 grow">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
