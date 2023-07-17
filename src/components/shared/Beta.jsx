import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GetButton } from ".";
import { BetaMobile, BetaDestop, BetaTablet } from "assets/index";

const Beta = () => {
  return (
    <InviteDiv>
      <BoxColor></BoxColor>
      <TextDiv>
        <GetinviteH3>We’re in beta. Get your invite today!</GetinviteH3>
        <ArrowDiv>
          <InviteH3>GET AN INVITE</InviteH3>
          <GetButton />
        </ArrowDiv>
      </TextDiv>
    </InviteDiv>
  );
};

export default Beta;

const InviteDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-size: cover;
  position: relative;
  z-index: 1;
  background-image: url(${BetaMobile});
  padding-left: 32px;
  padding-right: 32px;
  box-sizing: border-box;
  padding-bottom: 64px;
  @media (min-width: 768px) {
    background-size: cover;
    display: flex;
    flex-direction: row;
    position: relative;
    z-index: 1;
    background-image: url(${BetaTablet});
    padding-right: 40px;
    padding-left: 0px;
    box-sizing: border-box;
    padding-bottom: 0px;
    align-items: center;
  }
  @media (min-width: 1440px) {
    background-image: url(${BetaDestop});
    padding-right: 165px;
  }
`;

const GetinviteH3 = styled.h3`
  color: #fff;
  font-family: DM Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 3.333px;
  text-transform: uppercase;
  margin-top: 58px;
  margin-bottom: 24px;
  margin-left: 0px;
  @media (min-width: 768px) {
    color: #fff;
    font-family: DM Sans;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 4.167px;
    text-transform: uppercase;
    width: 400px;
    margin-left: 33px;
  }
  @media (min-width: 1440px) {
    margin-left: 159px;
  }
`;

const BoxColor = styled.div`
  background: linear-gradient(27deg, #ffc593 0%, #bc7198 51.95%, #5a77ff 100%);
  width: 128px;
  height: 6px;
  @media (min-width: 768px) {
    width: 6px;
    height: 280px;
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
`;

const ArrowDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const TextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: row;
  }
  @media (min-width: 1440px) {
  }
`;
