import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  White,
  Youtube,
} from "svg/index";
import { GetButton } from ".";

function Footer() {
  return (
    <FooterContainer>
      <LogoDiv>
        <White />
        <ArrowDivTablet>
          <InviteH3>GET AN INVITE</InviteH3>
          <GetButton />
        </ArrowDivTablet>
      </LogoDiv>
      <MiniContainer>
        <TabletIconsDiv>
          <IconDiv>
            <Youtube />
            <Facebook />
            <Instagram />
            <Twitter />
            <Pinterest />
          </IconDiv>
          <CopyrightTextTablet>
            Copyright 2019. All Rights Reserved
          </CopyrightTextTablet>
        </TabletIconsDiv>

        <TextDiv>
          <Link to="/">
            <TextH3>Home</TextH3>
          </Link>
          <Link to="/Stories">
            <TextH3>Stories</TextH3>
          </Link>
          <Link to="/Features">
            <TextH3>Features</TextH3>
          </Link>
          <Link to="/Pricing">
            <TextH3>Pricing</TextH3>
          </Link>
        </TextDiv>
      </MiniContainer>

      <ArrowDiv>
        <InviteH3>GET AN INVITE</InviteH3>
        <GetButton />
      </ArrowDiv>
      <CopyrightText>Copyright 2019. All Rights Reserved</CopyrightText>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 56px;
  padding-bottom: 56px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding-top: 56px;
    padding-bottom: 56px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 1440px) {
    padding-left: 165px;
    padding-right: 165px;
  }
`;

const IconDiv = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 13px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const TextH3 = styled.div`
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;

  :hover {
    opacity: 0.3;
    cursor: pointer;
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  padding-bottom: 119px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 26px;
    padding-bottom: 0;
    position: relative;
    left: 0;
  }

  @media (min-width: 1440px) {
    position: absolute;
    left: 279px;
    display: flex;
    flex-direction: column;
    gap: 19px;
    padding-bottom: 0px;
    align-items: flex-start;
  }
`;

const CopyrightText = styled.h3`
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.5;
  margin-top: 34px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const CopyrightTextTablet = styled.h3`
  display: none;
  @media (min-width: 768px) {
    display: block;
    color: #fff;
    text-align: center;
    font-size: 15px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
  }
`;

const TabletIconsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    -webkit-box-pack: center;
    justify-content: space-between;
  }
`;

const InviteH3 = styled.h3`
  color: #fff;
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;

  :hover {
    text-decoration-line: underline;
    cursor: pointer;
    transition: ease 0.3s;
  }
`;

const ArrowDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

const ArrowDivTablet = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
`;

const MiniContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 49px;

  @media (min-width: 768px) {
    flex-direction: column-reverse;
    width: 100%;
    align-items: flex-start;
    margin-top: 32px;
    gap: 72px;
  }

  @media (min-width: 1440px) {
    margin-top: 85px;
    position: relative;
  }
`;

const Link = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
`;
