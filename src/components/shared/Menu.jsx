import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <MenuDiv>
      <StyledLink to="/Stories">STORIES</StyledLink>
      <StyledLink to="/Features">FEATURES</StyledLink>
      <StyledLink to="/Pricing">PRICING</StyledLink>
      <DivBox></DivBox>
      <Button>GET AN INVITE</Button>
    </MenuDiv>
  );
}

export default Menu;

const MenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background: white;
  z-index: 2;
  width: 100%;
  padding-bottom: 32px;
  padding-top: 32px;
  padding-left: 24px;
  padding-right: 24px;
  box-sizing: border-box;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: #000;
  text-align: center;
  font-family: DM Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  text-decoration: none;
`;

const DivBox = styled.div`
  opacity: 0.25;
  background: #000;
  height: 1px;
  width: 100%;
`;

const Button = styled.button`
  height: 48px;
  background: #000;
  width: 100%;
  border: none;
  color: #FFF;
  text-align: center;
  font-family: DM Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.5px;
`;
