import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ArrowWhite, Facebook, Instagram, Pinterest, Twitter, White, Youtube } from "svg/index";

const FooterContainer = styled.div`
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 56px;
    padding-bottom: 56px;
`;

function Footer() {
  return (
    <FooterContainer>
      <White />
      <div className="footer_icons">
        <Youtube />
        <Facebook />
        <Instagram />
        <Twitter />
        <Pinterest />
      </div>
      <div>
        <h3>Home</h3>
        <h3>Stories</h3>
        <h3>Features</h3>
        <h3>Pricing</h3>
      </div>
      <div>
        <h3>GET AN INVITE</h3>
        <ArrowWhite />
      </div>
      <h3 className="copyright_h3">Copyright 2019. All Rights Reserved</h3>
    </FooterContainer>
  );
}

export default Footer;
