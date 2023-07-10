import {
  BehindTheWaves,
  Somwarpet,
  LandOfDreams,
  CalmWaters,
  DarkForest,
  MilkyWay,
  CityScapes,
  MountainMobile,
  EighteenDaysVoyage,
  Architecturals,
  WorldTour,
  UnforeseenCorners,
  KingOnAfrica,
  TripToNowhere,
  RageOfTheSea,
  RunningFree,
} from "assets/index";
import React, { useState, useEffect } from "react";
import { GetButton } from ".";
import styled from "styled-components";



function StoryComponents({ storyIDs, hideDate }) {
  const [stories, setStories] = useState([
    {
      id: 1,
      bgImage: MountainMobile,
      date: "April 16th 2020",
      title: "The Mountains",
      author: "by John Appleseed",
    },
    {
      id: 2,
      bgImage: CityScapes,
      date: "April 14th 2020",
      title: "Sunset Cityscapes",
      author: "by Benjamin Cruz",
    },
    {
      id: 3,
      bgImage: EighteenDaysVoyage,
      date: "April 11th 2020",
      title: "18 Days Voyage",
      author: "by Alexei Borodin",
    },
    {
      id: 4,
      bgImage: Architecturals,
      date: "April 9th 2020",
      title: "Architecturals",
      author: "by Samantha Brooke",
    },
    {
      id: 5,
      bgImage: WorldTour,
      date: "April 7th 2020",
      title: "World Tour 2019",
      author: "by Timothy Wagner",
    },
    {
      id: 6,
      bgImage: UnforeseenCorners,
      date: "April 3rd 2020",
      title: "Unforeseen Corners",
      author: "by William Malcolm",
    },
    {
      id: 7,
      bgImage: KingOnAfrica,
      date: "March 29th 2020",
      title: "King on Africa: Part II",
      author: "by Tim Hillenburg",
    },
    {
      id: 8,
      bgImage: TripToNowhere,
      date: "March 21st 2020",
      title: "The Trip to Nowhere",
      author: "by Felicia Rourke",
    },
    {
      id: 9,
      bgImage: RageOfTheSea,
      date: "March 19th 2020",
      title: "Rage of The Sea",
      author: "by Mohammed Abdul",
    },
    {
      id: 10,
      bgImage: RunningFree,
      date: "March 16th 2020",
      title: "Running Free",
      author: "by Michelle",
    },
    {
      id: 11,
      bgImage: BehindTheWaves,
      date: "March 11th 2020",
      title: "Behind the Waves",
      author: "by Lamarr Wilson",
    },
    {
      id: 12,
      bgImage: CalmWaters,
      date: "March 9th 2020",
      title: "Calm Waters",
      author: "by Samantha Brooke",
    },
    {
      id: 13,
      bgImage: MilkyWay,
      date: "March 5th 2020",
      title: "The Milky Way",
      author: "by Benjamin Cruz",
    },
    {
      id: 14,
      bgImage: DarkForest,
      date: "March 4th 2020",
      title: "Night at The Dark Forest",
      author: "by  Mohammed Abdul",
    },
    {
      id: 15,
      bgImage: Somwarpet,
      date: "March 1st 2020",
      title: "Somwarpet’s Beauty",
      author: "by Michelle",
    },
    {
      id: 16,
      bgImage: LandOfDreams,
      date: "February 25th 2020",
      title: "Land of Dreams",
      author: "by William Malcolm",
    },
  ]);

  return (
    <>
      {stories
        .filter((story) => storyIDs.includes(story.id))
        .map((story) => (
          <StoryContainer key={story.id} bgImage={story.bgImage}>
            {!hideDate && <DateH3>{story.date}</DateH3>}
            <H1text>{story.title}</H1text>
            <H2text>{story.author}</H2text>
            <DivBox></DivBox>
            <GetButton />
          </StoryContainer>
        ))}
    </>
  );
}

export default StoryComponents;

const StoryContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 33px;
  width: 100%;
  height: 375px;
  padding-right: 33px;
  padding-bottom: 40px;
  padding-top: 215px;
  background: no-repeat;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.66) 100%
    );
    z-index: 0;
  }
`;

const H1text = styled.h1`
  color: #fff;
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  z-index: 1;
`;

const H2text = styled.h2`
  color: #fff;
  font-family: DM Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  z-index: 1;
`;

const DivBox = styled.div`
  opacity: 0.25;
  background: #fff;
  width: 100%;
  height: 1px;
  margin-top: 16px;
  margin-bottom: 20px;
  z-index: 1;
`;

const DateH3 = styled.h3`
  color: #fff;
  font-family: DM Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
  z-index: 1;
`;
