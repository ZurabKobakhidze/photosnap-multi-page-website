
import { MountainMobile } from "assets/index";
import React, { useState, useEffect } from "react";
import { GetButton } from ".";
import styled from 'styled-components';

const StoryContainer = styled.div`
  background: url(${MountainMobile}) no-repeat ;
  
 
  
`;

function StoryComponents() {
  return (
    <StoryContainer>
        <h2>The Mountains</h2>
        <h3>by John Appleseed</h3>
        <GetButton />
    </StoryContainer>
  );
}

export default StoryComponents;