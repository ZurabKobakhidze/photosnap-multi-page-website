import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GetButton } from ".";
import { BetaMobile } from "assets/index";

const Beta = () => {
  return (
    <InviteDiv>
       <BoxColor></BoxColor>
      <GetinviteH3>We’re in beta. Get your invite today!</GetinviteH3>
      <GetButton />
    </InviteDiv>
  );
};

export default Beta;

const InviteDiv = styled.div`
  display: flex;
  flex-direction: column;
 
  position: relative;
  z-index: 1;
  background-image: url(${BetaMobile});
  padding-left: 32px;
  padding-right: 32px;
  box-sizing: border-box;
  padding-bottom: 64px;
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
`;

const BoxColor = styled.div`
  background: linear-gradient(27deg, #ffc593 0%, #bc7198 51.95%, #5a77ff 100%);
  width: 128px;
  height: 6px;
`;
