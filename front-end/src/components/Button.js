import PropTypes from "prop-types";
import React from "react";
import "./Button.css";

export const Button = ({ property1, className, divClassName, text = "Register" }) => {
  return (
    <button className={`button ${property1} ${className}`}>
      <div className={`register ${divClassName}`}>{text}</div>
    </button>
  );
};

Button.propTypes = {
  property1: PropTypes.oneOf(["thirty", "twenty", "ten", "fifty", "registration", "five"]),
  text: PropTypes.string,
};
