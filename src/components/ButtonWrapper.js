import PropTypes from "prop-types";
import React from "react";
import { Button } from "../components/Button";
import "./ButtonWrapper.css";

export const ButtonWrapper = ({ buttonText = "Category" }) => {
  return (
    <div className="button-wrapper">
      <Button
        className="button-instance"
        divClassName="design-component-instance-node"
        property1="ten"
        text={buttonText}
      />
    </div>
  );
};

ButtonWrapper.propTypes = {
  buttonText: PropTypes.string,
};
