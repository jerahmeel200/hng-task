import React from "react";
import vector from "../assets/Vector.png";
// import hng_icon from "../assets/Footer text.svg";
import I4G from "../assets/I4G.png";
import "./footer.css";
const footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <img src={vector} alt="" height="30" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt="" height="30" />
      </div>
    </div>
  );
};

export default footer;
