import { HamburgeMenu, LogoImage , Close} from "assets/index";
import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      
      <Main>
        <img src={LogoImage} alt="" />
        <img src={isMenuOpen ? Close : HamburgeMenu} alt="" onClick={handleMenuClick} />
      </Main>
      {isMenuOpen && <Menu />}
      {isMenuOpen && <Overlay />}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const Main = styled.div`
  width: 100%;
  height: 73px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
  box-sizing: border-box;
  position: relative;
  background: white;
  z-index: 2;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;