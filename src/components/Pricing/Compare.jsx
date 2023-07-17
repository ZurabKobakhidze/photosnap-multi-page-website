import { CheckIcon } from "assets/index";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Compare() {
  return (
    <ComapreDiv>
      <CompareH1>COMPARE</CompareH1>
      <FeatureDiv>
        <FeaturesMini>
          <FeaturesH1>THE FEATURES</FeaturesH1>
          <TabletCheck>
            <CheckTypeTablet>BASIC</CheckTypeTablet>
            <CheckTypeTablet>PRO</CheckTypeTablet>
            <CheckTypeTablet>BUSINESS</CheckTypeTablet>
          </TabletCheck>
        </FeaturesMini>

        <BlackLine></BlackLine>
        <div>
          <StoryDiv>
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
          </StoryDiv>
          <GrayLine></GrayLine>
        </div>
        <div>
          <StoryDiv>
            <FeaturesH1>UNLIMITED PHOTO UPLOAD</FeaturesH1>
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
          </StoryDiv>
          <GrayLine></GrayLine>
        </div>
        <div>
          <StoryDiv>
            <FeaturesH1>EMBEDDING CUSTOM CONTENT</FeaturesH1>
            <CheckDiv>
              <ChechTypeGap>
                <CheckType>BASIC</CheckType>
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
          </StoryDiv>
          <GrayLine></GrayLine>
        </div>
        <div>
          <StoryDiv>
            <FeaturesH1>CUSTOMIZE METADATA</FeaturesH1>
            <CheckDiv>
              <ChechTypeGap>
                <CheckType>BASIC</CheckType>
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
          </StoryDiv>
          <GrayLine></GrayLine>
        </div>
        <div>
          <StoryDiv>
            <FeaturesH1>ADVANCED METRICS</FeaturesH1>
            <CheckDiv>
              <ChechTypeGap>
                <CheckType>BASIC</CheckType>
              </ChechTypeGap>
              <ChechTypeGap>
                <CheckType>PRO</CheckType>
              </ChechTypeGap>
              <ChechTypeGap>
                <CheckType>BUSINESS</CheckType>
                <img src={CheckIcon} alt="" />
              </ChechTypeGap>
            </CheckDiv>
          </StoryDiv>
          <GrayLine></GrayLine>
        </div>
        <div>
          <StoryDiv>
            <FeaturesH1>PHOTO DOWNLOADS</FeaturesH1>
            <CheckDiv>
              <ChechTypeGap>
                <CheckType>BASIC</CheckType>
              </ChechTypeGap>
              <ChechTypeGap>
                <CheckType>PRO</CheckType>
              </ChechTypeGap>
              <ChechTypeGap>
                <CheckType>BUSINESS</CheckType>
                <img src={CheckIcon} alt="" />
              </ChechTypeGap>
            </CheckDiv>
          </StoryDiv>
          <GrayLine></GrayLine>
        </div>
        <div>
          <StoryDiv>
            <FeaturesH1>SEARCH ENGINE INDEXING</FeaturesH1>
            <CheckDiv>
              <ChechTypeGap>
                <CheckType>BASIC</CheckType>
              </ChechTypeGap>
              <ChechTypeGap>
                <CheckType>PRO</CheckType>
              </ChechTypeGap>
              <ChechTypeGap>
                <CheckType>BUSINESS</CheckType>
                <img src={CheckIcon} alt="" />
              </ChechTypeGap>
            </CheckDiv>
          </StoryDiv>
          <GrayLine></GrayLine>
        </div>
        <div>
          <StoryDiv>
            <FeaturesH1>CUSTOM ANALYTICS</FeaturesH1>
            <CheckDiv>
              <ChechTypeGap>
                <CheckType>BASIC</CheckType>
              </ChechTypeGap>
              <ChechTypeGap>
                <CheckType>PRO</CheckType>
              </ChechTypeGap>
              <ChechTypeGap>
                <CheckType>BUSINESS</CheckType>
                <img src={CheckIcon} alt="" />
              </ChechTypeGap>
            </CheckDiv>
          </StoryDiv>
          <GrayLine></GrayLine>
        </div>
      </FeatureDiv>
    </ComapreDiv>
  );
}

export default Compare;

const CheckDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 75px;
  margin-top: 16px;
 
  @media (min-width: 768px) {
    padding-right: 55px;
    gap: 125px;
    margin-top: 0;
  }
  
`;

const BlackLine = styled.div`
  width: 100%;
  height: 1px;
  background: black;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const ComapreDiv = styled.div`
  margin-top: 64px;
  width: 318px;
  display: flex;
    flex-direction: column;
    align-items: center;

  @media (min-width: 768px) {
    margin-top: 112px;
    width: 100%;
  }
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
  @media (min-width: 768px) {
    display: none;
  }
`;

const CheckTypeTablet = styled.h3`
  color: #000;
  text-align: center;
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
  display: none;
  width: 140px;
  @media (min-width: 768px) {
    display: block;
  }
`;

const ChechTypeGap = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

`;

const GrayLine = styled.div`
  width: 100%;
  height: 1px;
  background: #dfdfdf;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const CompareH1 = styled.h1`
  color: #000;
  text-align: center;
  font-family: DM Sans;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 4.167px;
  text-transform: uppercase;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const FeatureDiv = styled.div`
  margin-top: 0;
  width: 100%;
  @media (min-width: 768px) {
    margin-top: 64px;
  }
  @media (min-width: 1440px) {
    width: 731px;
  }
`;

const FeaturesMini = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TabletCheck = styled.div`
  display: flex;
  flex-direction: row;
`;

const StoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    display: flex;
  flex-direction: row;
  justify-content: space-between;
  }
`;

