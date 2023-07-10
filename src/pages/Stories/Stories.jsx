import { MoonHazi } from "components/Stories";
import { Footer, Header, StoryComponents } from "components/shared";
import React, { useState, useEffect } from "react";

function Stories() {
  return  <div>
 <Header/>
 <div>
  < MoonHazi />
  < StoryComponents storyIDs={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}  />
 </div>
 < Footer />
  </div>;
}

export default Stories;
