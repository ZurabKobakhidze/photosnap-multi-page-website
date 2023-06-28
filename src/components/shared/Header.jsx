import { HamburgeMenu, LogoImage } from "assets/index";
import React, { useState, useEffect } from "react";



function Header() {
  return (
    <div>
      <img src={LogoImage} alt="" />
      <img src={HamburgeMenu} alt="" />
      
    </div>
  );
}

export default Header;
