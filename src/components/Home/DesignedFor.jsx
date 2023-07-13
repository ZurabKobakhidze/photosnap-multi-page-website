import { DesignedPhoto } from "assets/index";
import { GetButton, GetButtonBlack } from "components/shared";
import React from "react";
import styled from "styled-components";

const DesignedFor = () => {
  return (
    <DivMain>
      <img src={DesignedPhoto} alt="" />
      <Container>
        <H1Text>DESIGNED FOR EVERYONE</H1Text>
        <H2text>
          Photosnap can help you create stories that resonate with your
          audience. Our tool is designed for photographers of all levels,
          brands, businesses you name it.
        </H2text>
        <ArrowDiv>
          <InviteH3>VIEW THE STORIES</InviteH3>
          <GetButtonBlack />
        </ArrowDiv>
      </Container>
    </DivMain>
  );
};

export default DesignedFor;

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
