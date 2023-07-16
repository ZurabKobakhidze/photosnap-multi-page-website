import { HeroMobile, HeroDesktop, HeroTablet } from "assets/index";
import { GetButton } from "components/shared";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function FeaturesDiv() {
  return (
    <DivMain>
      <MobilePhoto src={HeroMobile} alt="" />
      <TabletPhoto src={HeroTablet} alt="" />
      <DesktopPhoto src={HeroDesktop} alt="" />
      <Container>
        <BoxColor></BoxColor>
        <TextDiv>
          <TextH1>FEATURES</TextH1>
          <TextH3>
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </TextH3>
        </TextDiv>
      </Container>
    </DivMain>
  );
}

export default FeaturesDiv;

const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

const Container = styled.div`
  background: black;
  padding-left: 33px;
  padding-right: 33px;
  box-sizing: border-box;
  padding-bottom: 72px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (min-width: 768px) {
    padding-left: 0;
    padding-top: 173px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
  }
`;

const BoxColor = styled.div`
  background: linear-gradient(27deg, #ffc593 0%, #bc7198 51.95%, #5a77ff 100%);
  width: 128px;
  height: 6px;
  @media (min-width: 768px) {
    width: 6px;
    height: 144px;
  }
`;

const TextH1 = styled.h1`
  color: #fff;
  font-size: 32px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 3.333px;
  text-transform: uppercase;
  margin-top: 66px;
  width: 100%;
  @media (min-width: 768px) {
    color: #fff;
    font-family: DM Sans;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 4.167px;
    text-transform: uppercase;
    width: 387px;
    margin-top: 0;
  }
`;

const TextH3 = styled.h3`
  color: #fff;
  font-size: 15px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  opacity: 0.6;
  margin-top: 16px;
  padding-bottom: 23px;
  width: 100%;
  @media (min-width: 768px) {
    color: #fff;
    font-family: DM Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    width: 387px;
  }
`;

const MobilePhoto = styled.img`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

const TabletPhoto = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;

const DesktopPhoto = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: none;
  }
  @media (min-width: 1440px) {
    display: block;
  }
`;

const TextDiv = styled.div`
  margin-left: 0;
  @media (min-width: 768px) {
    margin-left: 48px;
  }
  @media (min-width: 1440px) {
    margin-left: 106px;
  }
`;
