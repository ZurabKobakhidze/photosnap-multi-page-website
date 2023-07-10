import { FeatersDiv } from "components/Features";
import { Beta, Footer, Header, ToolsComponents } from "components/shared";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Features() {
  return (
    <div>
      <Header />
      <div>
        <FeatersDiv />
      </div>
      <DivTools>
        <ToolsComponents toolIDs={[1, 2, 3, 4, 5]} />
      </DivTools>
      <Beta />

      <Footer />
    </div>
  );
}

export default Features;

const DivTools = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 80px;
  box-sizing: border-box;
`;
