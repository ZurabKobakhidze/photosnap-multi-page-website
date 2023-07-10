import { MoonHazi } from "components/Stories";
import { Footer, Header, StoryComponents } from "components/shared";
import React, { useState, useEffect } from "react";

function Stories() {
  return  <div>
 <Header/>
 <div>
  < MoonHazi />
  <StoryComponents storyIDs={Array.from({length: 16}, (_, i) => i + 1)} />
 </div>
 < Footer />
  </div>;
}

export default Stories;
