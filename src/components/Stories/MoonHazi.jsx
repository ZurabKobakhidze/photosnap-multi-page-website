import { MoonOfAppalacia } from "assets/index";
import { GetButton } from "components/shared";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function MoonHazi() {
  return (
    <Divmain>
      <img src={MoonOfAppalacia} alt="" />
      <Container>
        <TextH2>LAST MONTH’S FEATURED STORY</TextH2>
        <TextH1>HAZY FULL MOON OF APPALACHIA</TextH1>
        <DivH3>
          <DivTexth3>March 2nd 2020</DivTexth3>
          <DivTextWhite>by John Appleseed</DivTextWhite>
        </DivH3>
        <TextH3>
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </TextH3>
        <GetButton />
      </Container>
    </Divmain>
  );
}

export default MoonHazi;

const Divmain = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  background: black;
  padding-left: 33px;
  padding-right: 33px;
  box-sizing: border-box;
  padding-bottom: 48px;
`;

const TextH2 = styled.h2`
  color: #fff;
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
  margin-top: 42px;
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
  margin-top: 16px;
`;

const TextH3 = styled.h3`
  color: #fff;
  font-size: 15px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  opacity: 0.6;
  margin-top: 24px;
  padding-bottom: 24px;
`;

const DivTexth3 = styled.h3`
  color: #fff;
  font-family: DM Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.75;
`;

const DivTextWhite = styled.h3`
  color: #fff;
  font-family: DM Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DivH3 = styled.div`
      display: flex;
    flex-direction: row;
    gap: 9px;
    margin-top: 16px;
  
`;

