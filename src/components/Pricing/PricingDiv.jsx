
import { PricingHeroMobile } from "assets/index";
import { GetButton } from "components/shared";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function PricingDiv() {
  return (
    <DivMain>
      <img src={PricingHeroMobile} alt="" />
      <Container>
        <BoxColor></BoxColor>
        <TextH1>PRICING</TextH1>
        <TextH3>
          Create a your stories, Photosnap is a platform for photographers and
          visual storytellers. It’s the simple way to create and share your
          photos.
        </TextH3>
      </Container>
    </DivMain>
  );
}

export default PricingDiv;

const DivMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  background: black;
  padding-left: 33px;
  padding-right: 33px;
  box-sizing: border-box;
  padding-bottom: 72px;
`;

const BoxColor = styled.div`
  background: linear-gradient(27deg, #ffc593 0%, #bc7198 51.95%, #5a77ff 100%);
  width: 128px;
  height: 6px;
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
`;
