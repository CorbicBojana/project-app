import React from "react";

import WarehouseImage from "../../img/Warehouse-image.png";

import "./Intro.css";

function Intro() {
  return (
    <>
      <div className="intro">
        <h1 className="intro-text">Warehouse Logistics Solutions</h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage.
        </p>
      </div>
      <div className="image-holder">
        <img src={WarehouseImage} alt="warehouse" />
      </div>
    </>
  );
}

export default Intro;
