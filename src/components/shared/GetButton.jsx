import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  ArrowWhite,
} from "svg/index";

const GetButton = () => {
  return (
    
      <InviteDiv>
        <GetinviteH3>GET AN INVITE</GetinviteH3>
        <ArrowWhite />
      </InviteDiv>
    
  );
}

export default GetButton;

const InviteDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
`;

const GetinviteH3 = styled.h3`
  color: #fff;
  font-size: 12px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
`;



