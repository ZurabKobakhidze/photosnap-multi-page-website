import { CheckIcon } from "assets/index";
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
          <p>
            Includes basic usage of our platform. Recommended for new and
            aspiring photographers.
          </p>
          <h1>$19.00</h1>
          <h3>per month</h3>
          <button>PICK PLAN</button>
        </BasicDiv>
        <BoxColor></BoxColor>
        <ProDiv>
          <ProH1>Pro</ProH1>
          <ProP>
            More advanced features available. Recommended for photography
            veterans and professionals.
          </ProP>
          <h1>$39.00</h1>
          <h3>per month</h3>
          <button>PICK PLAN</button>
        </ProDiv>
        <BusinessDiv>
          <h1>Business</h1>
          <p>
            Additional features available such as more detailed metrics.
            Recommended for business owners.
          </p>
          <h1>$99.00</h1>
          <h3>per month</h3>
          <button>PICK PLAN</button>
        </BusinessDiv>
        <ComapreDiv>
          <div className="features">
            <FeaturesH1>THE FEATURES</FeaturesH1>
            <BlackLine></BlackLine>
            <div className="storyPostingDiv">
              <FeaturesH1>UNLIMITED STORY POSTING</FeaturesH1>
              <CheckDiv>
                <ChechTypeGap>
                  <CheckType>BASIC</CheckType>
                  <img src={CheckIcon} alt="" />
                </ChechTypeGap>
                <ChechTypeGap>
                  <CheckType>PRO</CheckType>
                  <img src={CheckIcon} alt="" />
                </ChechTypeGap>
                <ChechTypeGap>
                  <CheckType>BUSINESS</CheckType>
                  <img src={CheckIcon} alt="" />
                </ChechTypeGap>
              </CheckDiv>
            </div>
          </div>
        </ComapreDiv>
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

const SwitchDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const BasicDiv = styled.div`
  width: 100%;
  background: #f5f5f5;
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

const ProDiv = styled.div`
  background: #000;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 48px;
  box-sizing: border-box;
`;

const BoxColor = styled.div`
  background: linear-gradient(27deg, #ffc593 0%, #bc7198 51.95%, #5a77ff 100%);
  width: 100%;
  height: 6px;
  margin-top: 24px;
`;

const ProH1 = styled.h1`
  color: white;
  margin-top: 42px;
  color: #fff;
  text-align: center;
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
`;

const ProP = styled.p`
  color: white;
  color: #fff;
  text-align: center;
  font-family: DM Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  margin-top: 18px;
  opacity: 0.6;
`;

const BusinessDiv = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 52px;
  padding-bottom: 40px;
  box-sizing: border-box;
  background: #f5f5f5;
`;

const CheckDiv = styled.div`
      display: flex;
    flex-direction: row;
    gap: 75px;
    margin-top: 16px;
`;

const BlackLine = styled.div`
width:100%;
height: 1px;
background: black;
margin-top: 24px;
margin-bottom: 24px;
`;

const ComapreDiv = styled.div`
  margin-top: 64px;
`;

const FeaturesH1 = styled.h1`
  color: #000;
font-family: DM Sans;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 2px;
`;

const CheckType = styled.h3`
  color: #000;
font-family: DM Sans;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 1.667px;
opacity: 0.5;
`;

const ChechTypeGap = styled.div`
  gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;