import { Compare, PricingDiv } from "components/Pricing";
import Switch from "components/Pricing/Switch";
import { Beta, Footer, Header, ToolsComponents } from "components/shared";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Pricing() {
  const [checked, setChecked] = useState(false);
  const [basicPrice, setBasicPrice] = useState(19.0);
  const [proPrice, setProPrice] = useState(39.0);
  const [businessPrice, setBusinessPrice] = useState(99.0);

  useEffect(() => {
    if (checked) {
      setBasicPrice(190.0);
      setProPrice(390.0);
      setBusinessPrice(990.0);
    } else {
      setBasicPrice(19.0);
      setProPrice(39.0);
      setBusinessPrice(99.0);
    }
  }, [checked]);

  return (
    <div>
      <Header />
      <div>
        <PricingDiv />
      </div>
      <DivTools>
        <SwitchDiv>
          <MonthyH1 checked={checked}>Monthly</MonthyH1>
          <Switch checked={checked} setChecked={setChecked} />
          <YearlyH1 checked={checked}>Yearly</YearlyH1>
        </SwitchDiv>
        <Container>
          <BasicDiv>
            <MiniContainer>
              <BasicH1>Basic</BasicH1>
              <BasicP>
                Includes basic usage of our platform. Recommended for new and
                aspiring photographers.
              </BasicP>
              <MobilePrice>
                <BasicPrice>${basicPrice.toFixed(2)}</BasicPrice>
                <BasicMonthly>per month</BasicMonthly>
              </MobilePrice>
              <BasicButton>PICK PLAN</BasicButton>
            </MiniContainer>
            <TabletPrice>
              <BasicPrice>${basicPrice.toFixed(2)}</BasicPrice>
              <BasicMonthly>per month</BasicMonthly>
            </TabletPrice>
          </BasicDiv>
          <BlackDiv>
            <BoxColor></BoxColor>
            <ProDiv>
              <MiniContainer>
                <ProH1>Pro</ProH1>
                <ProP>
                  More advanced features available. Recommended for photography
                  veterans and professionals.
                </ProP>
                <MobilePrice>
                  <ProPrice>${proPrice.toFixed(2)}</ProPrice>
                  <ProMonthly>per month</ProMonthly>
                </MobilePrice>
                <ProButton>PICK PLAN</ProButton>
              </MiniContainer>
              <TabletPrice>
                <ProPrice>${proPrice.toFixed(2)}</ProPrice>
                <ProMonthly>per month</ProMonthly>
              </TabletPrice>
            </ProDiv>
          </BlackDiv>

          <BusinessDiv>
            <MiniContainer>
              <BasicH1>Business</BasicH1>
              <BasicP>
                Additional features available such as more detailed metrics.
                Recommended for business owners.
              </BasicP>
              <MobilePrice>
                <BasicPrice>${businessPrice.toFixed(2)}</BasicPrice>
                <BasicMonthly>per month</BasicMonthly>
              </MobilePrice>
              <BasicButton>PICK PLAN</BasicButton>
            </MiniContainer>
            <TabletPrice>
              <BasicPrice>${businessPrice.toFixed(2)}</BasicPrice>
              <BasicMonthly>per month</BasicMonthly>
            </TabletPrice>
          </BusinessDiv>
        </Container>

        <Compare />
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
  @media (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 1440px) {
    padding-left: 165px;
    padding-right: 165px;
  }
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
  height: 100%;
  @media (min-width: 768px) {
    width: 100%;
    background: rgb(245, 245, 245);
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: flex-start;
    padding: 42px 48px 40px;
    box-sizing: border-box;
    justify-content: space-between;
  }
  @media (min-width: 1440px) {
    justify-content: center;
    height: 407px;
    margin-top: 0;
  }
`;

const BasicH1 = styled.h1`
  color: #000;
  text-align: center;
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
`;

const BasicP = styled.p`
  color: #000;
  text-align: center;
  font-family: DM Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  margin-top: 18px;
  opacity: 0.6;
`;

const BasicPrice = styled.h1`
  color: #000;
  text-align: center;
  font-family: DM Sans;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 4.167px;
  text-transform: uppercase;
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
  @media (min-width: 1440px) {
    margin-top: 40px;
  }
`;

const BasicMonthly = styled.h3`
  color: #000;
  text-align: center;
  font-family: DM Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  opacity: 0.6;
`;

const BasicButton = styled.button`
  background: #000;
  height: 40px;
  width: 100%;
  color: #fff;
  text-align: center;
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
  border: none;
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 32px;
  }
  @media (min-width: 1440px) {
    margin-top: 40px;
  }
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
  height: 100%;
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: flex-start;
    padding: 40px 48px 40px;
    box-sizing: border-box;
    justify-content: space-between;
  }
  @media (min-width: 1440px) {
    justify-content: center;
    height: 470px;
    align-items: center;
    padding-top: 0;
  }
`;

const ProMonthly = styled.h3`
  color: #fff;
  text-align: center;
  font-family: DM Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  opacity: 0.6;
`;

const BoxColor = styled.div`
  background: linear-gradient(27deg, #ffc593 0%, #bc7198 51.95%, #5a77ff 100%);
  width: 100%;
  height: 6px;
  @media (min-width: 768px) {
    width: 6px;
    height: 270px;
  }
  @media (min-width: 1440px) {
    width: 100%;
    height: 6px;
  }
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
  @media (min-width: 768px) {
    margin-top: 0;
  }
  @media (min-width: 768px) {
    margin-top: 42px;
  }
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

const ProPrice = styled.h1`
  color: #fff;
  text-align: center;
  font-family: DM Sans;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 4.167px;
  text-transform: uppercase;
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
  @media (min-width: 1440px) {
    margin-top: 40px;
  }
`;

const ProButton = styled.button`
  color: #000;
  text-align: center;
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
  background: white;
  height: 40px;
  margin-top: 40px;
  width: 100%;
  border: none;
  @media (min-width: 768px) {
    margin-top: 32px;
  }
  @media (min-width: 1440px) {
    margin-top: 40px;
  }
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
  height: 100%;
  @media (min-width: 768px) {
    width: 100%;
    background: rgb(245, 245, 245);
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: flex-start;
    padding: 42px 48px 40px;
    box-sizing: border-box;
    justify-content: space-between;
  }
  @media (min-width: 1440px) {
    justify-content: center;
    height: 407px;
    margin-top: 0;
  }
`;

const MonthyH1 = styled.h1`
  color: #000;
  text-align: right;
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  opacity: ${(props) => (props.checked ? 0.5 : 1)};
`;

const YearlyH1 = styled.h1`
  color: #000;
  text-align: right;
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  opacity: ${(props) => (props.checked ? 1 : 0.5)};
`;

const MiniContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    width: 270px;
  }
`;

const TabletPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

const MobilePrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
  @media (min-width: 1440px) {
    display: flex;
  }
`;

const BlackDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 24px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1440px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0;
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 30px;
    margin-top: 48px;
  }
`;
