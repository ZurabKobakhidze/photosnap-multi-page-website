import { BeautifulDesktop, BeautifulPhoto, BeautifulTablet } from "assets/index";
import { GetButton, GetButtonBlack } from "components/shared";
import React from "react";
import styled from "styled-components";

const BeautifulStories = () => {
  return (
    <DivMain>
      <MobilePhoto src={BeautifulPhoto} alt="" />
      <TabletPhoto src={BeautifulTablet} alt="" />
      <DesktopPhoto src={BeautifulDesktop} alt="" />
      <Container>
        <H1Text>
          BEAUTIFUL
          <br />
          STORIES EVERY TIME
        </H1Text>
        <H2text>
          We provide design templates to ensure your stories look terrific.
          Easily add photos, text, embed maps and media from other networks.
          Then share your story with everyone.
        </H2text>
        <ArrowDiv>
          <InviteH3>VIEW THE STORIES</InviteH3>
          <GetButtonBlack />
        </ArrowDiv>
      </Container>
    </DivMain>
  );
};

export default BeautifulStories;

const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Container = styled.div`
  background: white;
  padding-left: 33px;
  padding-right: 33px;
  box-sizing: border-box;
  padding-top: 72px;
  padding-bottom: 72px;
  @media (min-width: 768px) {
    padding-left: 48px;
    padding-top: 173px;
    width: 100%;
  }
  @media (min-width: 1440px ){

    padding-left: 173px;
  }
`;

const H1Text = styled.h1`
  color: black;
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
    margin-top: 0;
    color: black;
    font-family: DM Sans;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px; 
    letter-spacing: 4.167px;
    text-transform: uppercase;
    width: 387px;
  }
`;

const H2text = styled.h2`
  color: black;
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
    color: black;
    font-family: DM Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    width: 387px;
    margin-top: 21px;
    padding-bottom: 43px;
  }
`;

const InviteH3 = styled.h3`
  color: #000;
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
`;

const ArrowDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
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