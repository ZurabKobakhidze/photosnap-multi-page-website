import { BeautifulPhoto } from "assets/index";
import { GetButton, GetButtonBlack } from "components/shared";
import React from "react";

const BeautifulStories = () => {
  return (
    <div>
      <img src={BeautifulPhoto} alt="" />
      <div>
        <h1>BEAUTIFULSTORIES EVERY TIME</h1>
        <p>
          We provide design templates to ensure your stories look terrific.
          Easily add photos, text, embed maps and media from other networks.
          Then share your story with everyone.
        </p>
        <GetButtonBlack />
      </div>
    </div>
  );
};

export default BeautifulStories;   