import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  White,
  Youtube,
} from "svg/index";
import { GetButton } from ".";

function Footer() {
  return (
    <FooterContainer>
      <White />
      <IconDiv>
        <Youtube />
        <Facebook />
        <Instagram />
        <Twitter />
        <Pinterest />
      </IconDiv>
      <TextDiv>
        <TextH3>Home</TextH3>
        <TextH3>Stories</TextH3>
        <TextH3>Features</TextH3>
        <TextH3>Pricing</TextH3>
      </TextDiv>
      <ArrowDiv>
        <InviteH3>GET AN INVITE</InviteH3>
        <GetButton />
      </ArrowDiv>
      <CopyrightText>Copyright 2019. All Rights Reserved</CopyrightText>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 56px;
  padding-bottom: 56px;
`;

const IconDiv = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 13px;
`;

const TextH3 = styled.div`
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 49px;
  gap: 19px;
  padding-bottom: 119px;
`;

const CopyrightText = styled.h3`
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.5;
  margin-top: 34px;
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
