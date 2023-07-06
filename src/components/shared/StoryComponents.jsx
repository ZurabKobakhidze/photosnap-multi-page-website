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
      {stories.filter(story => storyIDs.includes(story.id)).map((story) => (
        <StoryContainer key={story.id} bgImage={story.bgImage}>
          {!hideDate && <p>{story.date}</p>}
          <h2>{story.title}</h2>
          <h3>{story.author}</h3>
          <GetButton />
        </StoryContainer>
      ))}
    </>
  );
}

export default StoryComponents;

const StoryContainer = styled.div`
  background: no-repeat;
  background-image: url(${(props) => props.bgImage});
`;
