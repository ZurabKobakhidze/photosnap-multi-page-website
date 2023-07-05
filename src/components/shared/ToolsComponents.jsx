
import { ResponsiveSvg } from "assets/index";
import React, { useState, useEffect } from "react";

function ToolsComponents() {
  return (
    <div>
        <img src={ResponsiveSvg} alt="" />
        <h2>100% Responsive</h2>
        <p>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
    </div>
  );
}

export default ToolsComponents;