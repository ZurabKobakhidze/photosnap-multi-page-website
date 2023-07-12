import React, { useState } from "react";
import styled from "styled-components";

function ToggleSwitch({ checked, setChecked }) {
    return (
      <Switch>
        <Input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
        <Slider/>
      </Switch>
    );
  }

export default ToggleSwitch;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 64px;
  height: 32px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #dfdfdf;
  border-radius: 16px;
  transition: .4s;
  
  &:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 4px;
    background-color: black; 
    border-radius: 50%;
    transition: .4s;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #000;
  }

  &:checked + ${Slider}:before {
    background-color: white; 
    transform: translateX(32px);
  }
`;