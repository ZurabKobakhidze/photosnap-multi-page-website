import { PricingDiv } from "components/Pricing";
import { Beta, Footer, Header, ToolsComponents } from "components/shared";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Pricing() {
  return (
    <div>
      <Header />
      <div>
        <PricingDiv />
      </div>
      <DivTools>
        <SwitchDiv>
          <h3>Monthly</h3>
          <label className="switch">
            <input id="discount-checkbox" type="checkbox" />
            <span className="slider round"></span>
          </label>
          <h3>Yearly</h3>

        </SwitchDiv>
        <BasicDiv>
          <h2>Basic</h2>
          <p>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
          <h1>$19.00</h1>
          <h3>per month</h3>
          <button>PICK PLAN</button>

        </BasicDiv>
      </DivTools>
      <Beta />
      <Footer />
    </div>
  );
}

export default Pricing;

const DivTools = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
  padding-left: 28px;
  padding-right: 28px;
  padding-bottom: 64px;
  box-sizing: border-box;
`;

const SwitchDiv = styled.div`    display: flex;
align-items: center;
gap: 32px;`;

const BasicDiv = styled.div`
  width: 100%;
    background: #F5F5F5;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 52px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 40px;
    box-sizing: border-box;
`;