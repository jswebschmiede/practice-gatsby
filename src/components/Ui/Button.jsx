import React from "react";

const Button = props => {
  const classes = `${props.className} text-white transition-all rounded-md pl-8 pr-8 pt-1 pb-2`;
  return (
    <button
      type={props.type || "button"}
      className={classes}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
