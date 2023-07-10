import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GetButton } from ".";

const Beta = () => {
  return (
    <div>
      <h1>We’re in beta. Get your invite today!</h1>
      <GetButton />
    </div>
  );
};

export default Beta;

const InviteDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
  position: relative;
  z-index: 1;
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
