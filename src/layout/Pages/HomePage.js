import React from "react";

import ScHome from "../../components/SectionHome/ScHome";
import ScAboutMe from "../../components/SectionHome/ScAboutMe";
import ScProject_1 from "../../components/SectionHome/ScProject_1";
import ScProject_2 from "../../components/SectionHome/ScProject_2";
import ScContact from "../../components/SectionHome/ScContact"

function HomePage() {
  return (
    <main id="barba-wrapper">
      <div className="barba-container" data-namespace="top">
        <div className="fullpage" id="js-fullpage">
          <ScHome />
          <ScAboutMe />
          <ScProject_1 />
          <ScProject_2 />
          <ScContact/>
         </div>
        <p className="scrollDown">SCROLLDOWN</p>

        <div className="moon-background">
          <div className="moonlight">
            <div className="moonlight__wrap js-parallax-moonlight">
              <div className="layer moonlight__img" data-depth="0.2" />
            </div>
          </div>
        </div>

        <div className="sky-color" />
      </div>
    </main>
  );
}

export default HomePage;
