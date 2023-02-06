import React from "react";
import "./Place.css";

function Place(props) {
  const { children, className } = props;

  return <div className={`place valign-text-middle inter-normal-white-77px ${className || ""}`}>{children}</div>;
}

export default Place;
