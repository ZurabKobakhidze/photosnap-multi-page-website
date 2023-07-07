import {
  ResponsiveSvg,
  NoLimit,
  Embed,
  CustomDomain,
  BoostExposure,
  DragDrop,
} from "assets/index";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function ToolsComponents({ toolIDs }) {
  const [tools, setTools] = useState([
    {
      id: 1,
      icon: ResponsiveSvg,
      title: "100% Responsive",
      text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    },
    {
      id: 2,
      icon: NoLimit,
      title: "No Photo Upload Limit",
      text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    },
    {
      id: 3,
      icon: Embed,
      title: "Available to Embed",
      text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
    },
    {
      id: 4,
      icon: CustomDomain,
      title: "Custom Domain",
      text: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    },
    {
      id: 5,
      icon: BoostExposure,
      title: "Boost Your Exposure",
      text: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    },
    {
      id: 6,
      icon: DragDrop,
      title: "Drag & Drop Image",
      text: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    },
  ]);

  return (
    <>
      {tools
        .filter((tool) => toolIDs.includes(tool.id))
        .map((tool) => (
          <DivBox key={tool.id}>
            <img src={tool.icon} alt="" />
            <H2Text>{tool.title}</H2Text>
            <PText>{tool.text}</PText>
          </DivBox>
        ))}
    </>
  );
}

export default ToolsComponents;

const DivBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 56px;
`;

const H2Text = styled.h2`
  color: #000;
  text-align: center;
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  margin-top: 48px;
`;

const PText = styled.p`
  color: #000;
  text-align: center;
  font-family: DM Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  margin-top: 16px;
  opacity: 0.6;
`;
