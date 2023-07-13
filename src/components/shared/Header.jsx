import { HamburgeMenu, LogoImage, Close } from "assets/index";
import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Main>
        <Link to="/">
          <img src={LogoImage} alt="" />
        </Link>
        <MenuItems>
          <PagesDiv>
            <StyledLink to="/Stories">STORIES</StyledLink>
            <StyledLink to="/Features">FEATURES</StyledLink>
            <StyledLink to="/Pricing">PRICING</StyledLink>
          </PagesDiv>

          <Button>GET AN INVITE</Button>
        </MenuItems>
        <HamburgerImg
          src={isMenuOpen ? Close : HamburgeMenu}
          alt=""
          onClick={handleMenuClick}
        />
      </Main>
      {isMenuOpen && <Menu />}
      {isMenuOpen && <Overlay />}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  position: relative;
  z-index: 2;
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
  z-index: 3;

  @media (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const MenuItems = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    background: white;
    align-items: center;
    justify-content: center;
    gap: 57px;
  }
`;

const StyledLink = styled(Link)`
  color: #000;
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
  text-decoration: none;
`;

const Button = styled.button`
  @media (min-width: 768px) {
    height: 40px;
    background: #000;
    width: 158px;
    border: none;
    color: #fff;
    font-family: DM Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2px;
  }
`;

const PagesDiv = styled.div`
      display: flex;
    flex-direction: row;
    gap: 37px;

`;

const HamburgerImg = styled.img`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;
