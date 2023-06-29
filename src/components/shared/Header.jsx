import { HamburgeMenu, LogoImage } from "assets/index";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Main = styled.div`
   width: 100%;
   height: 73px;
   display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 24px;
    padding-right: 24px;
    box-sizing: border-box;
`;

function Header() {
  return (
    <Main>
      <img src={LogoImage} alt="" />
      <img src={HamburgeMenu} alt="" />
      
    </Main>
  );
}

export default Header;