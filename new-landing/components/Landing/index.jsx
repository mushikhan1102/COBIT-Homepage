import React from "react";
import Place from "../Place";
import Group1 from "../Group1";
import "./Landing.css";

function Landing(props) {
  const { place, image2, place1Props, place2Props } = props;

  return (
    <div className="landing screen">
      <div className="rectangle-6"></div>
      <div className="group-8">
        <div className="overlap-group">
          <Place>{place1Props.children}</Place>
        </div>
      </div>
      <div className="group-9">
        <div className="overlap-group1">
          <Place className={place2Props.className}>{place2Props.children}</Place>
        </div>
      </div>
      <div className="co-bit valign-text-middle">{place}</div>
      <Group1 />
      <img className="image-2" src={image2} alt="image 2" />
    </div>
  );
}

export default Landing;
