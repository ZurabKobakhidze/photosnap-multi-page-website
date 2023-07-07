import { BeautifulStories, CreateStories, DesignedFor } from "components/Home";
import { Footer, Header, StoryComponents, ToolsComponents } from "components/shared";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Home() {
  return (
    <div>
      <Header />
      <div id="home_div">
        <CreateStories />
        <BeautifulStories />
        <DesignedFor />
      </div>
      <div>
        < StoryComponents storyIDs={[1, 2, 3, 4]} hideDate />
      </div>
      <DivTools>
        < ToolsComponents toolIDs={[1, 2, 3]} />
      </DivTools>
      <Footer />
    </div>
  );
}

export default Home;

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