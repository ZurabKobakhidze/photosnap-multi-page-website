import { BeautifulPhoto } from "assets/index";
import { GetButton, GetButtonBlack } from "components/shared";
import React from "react";
import styled from "styled-components";

const BeautifulStories = () => {
  return (
    <DivMain>
      <img src={BeautifulPhoto} alt="" />
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
        <GetButtonBlack />
      </Container>
    </DivMain>
  );
};

export default BeautifulStories;

const DivMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  background: white;
  padding-left: 33px;
  padding-right: 33px;
  box-sizing: border-box;
  padding-top: 72px;
  padding-bottom: 72px;
`;

const H1Text = styled.h1`
  color: #000;
  font-family: "DM Sans", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 3.333px;
  text-transform: uppercase;
`;

const H2text = styled.h2`
  color: #000;
  font-family: DM Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  margin-top: 16px;
  margin-bottom: 23px;
`;

