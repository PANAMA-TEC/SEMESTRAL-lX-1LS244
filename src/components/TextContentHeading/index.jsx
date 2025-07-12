/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./index.css";

  const TextContentHeading = ({
  heading = "Heading",
  subHeading = "Descripcion",
  size,
  className,
  divClassName,
  subheadingClassName,
}) => {
  return (
    <div className={`text-content-heading ${className}`}>
      <div className={`heading ${divClassName}`}>{heading}</div>

      <div className={`subheading ${subheadingClassName}`}>{subHeading}</div>
    </div>
  );
};
export{TextContentHeading}