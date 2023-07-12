import { CheckIcon } from "assets/index";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Compare() {
  return (
    <ComapreDiv>
      <div className="features">
        <FeaturesH1>THE FEATURES</FeaturesH1>
        <BlackLine></BlackLine>
        <div>
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
          <GrayLine></GrayLine>
        </div>
        <div>
          <div className="storyPostingDiv">
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
          </div>
          <GrayLine></GrayLine>
        </div>
        <div>
          <div className="storyPostingDiv">
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
          </div>
          <GrayLine></GrayLine>
        </div>
        <div>
          <div className="storyPostingDiv">
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
          </div>
          <GrayLine></GrayLine>
        </div>
        <div>
          <div className="storyPostingDiv">
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
          </div>
          <GrayLine></GrayLine>
        </div>
        <div>
          <div className="storyPostingDiv">
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
          </div>
          <GrayLine></GrayLine>
        </div>
        <div>
          <div className="storyPostingDiv">
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
          </div>
          <GrayLine></GrayLine>
        </div>
        <div>
          <div className="storyPostingDiv">
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
          </div>
          <GrayLine></GrayLine>
        </div>
      </div>
    </ComapreDiv>
  );
}

export default Compare;

const CheckDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 75px;
  margin-top: 16px;
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

const GrayLine = styled.div`
  width: 100%;
  height: 1px;
  background: #dfdfdf;
  margin-top: 24px;
  margin-bottom: 24px;
`;
