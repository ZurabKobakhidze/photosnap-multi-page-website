import { MoonHazi } from "components/Stories";
import { Footer, Header, StoryComponents } from "components/shared";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Stories() {
  return (
    <div>
      <Header />
      <div>
        <MoonHazi />
        <GridCOntainer>
          <StoryComponents
            storyIDs={Array.from({ length: 16 }, (_, i) => i + 1)}
          />
        </GridCOntainer>
      </div>
      <Footer />
    </div>
  );
}

export default Stories;


const GridCOntainer = styled.div`
display: flex;
flex-direction: column;
@media (min-width: 768px) {
  display: grid;
    grid-template-columns: 1fr 1fr;
}
@media (min-width: 1440px){
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
`;
