import { CreateStories } from "components/Home";
import { Footer, Header } from "components/shared";
import React, { useState, useEffect } from "react";




function Home() {
  return <div>
    <Header />
    <div id="home_div">
    < CreateStories />
    </div>
    <Footer />
  </div>;
}

export default Home;
