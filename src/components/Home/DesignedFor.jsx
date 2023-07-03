
import { DesignedPhoto } from "assets/index";
import { GetButton, GetButtonBlack } from "components/shared";
import React from "react";

const DesignedFor = () => {
  return (
    <div>
      <img src={DesignedPhoto} alt="" />
      <div>
        <h1>DESIGNED FOR EVERYONE</h1>
        <p>
          Photosnap can help you create stories that resonate with your
          audience. Our tool is designed for photographers of all levels,
          brands, businesses you name it.
        </p>
        <GetButtonBlack />
      </div>
    </div>
  );
};

export default DesignedFor;
