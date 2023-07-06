import { BeautifulStories, CreateStories, DesignedFor } from "components/Home";
import { Footer, Header, StoryComponents, ToolsComponents } from "components/shared";
import React, { useState, useEffect } from "react";

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
      <div>
        < ToolsComponents />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
