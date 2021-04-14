import React from "react";

function ScAboutMe() {
  return (
    <div className="section">
      <div className="fullpage__slide">
        <div className="title">
          <h2 className="title__text js-letter">About Me</h2>
          <div className="border js-letter">
            <span />
            <span className="js-letter" />
          </div>
          <p className="title__lead js-letter">
            I love Technology, Books, <br />
            and Learning
          </p>
          <div className="btn-wrap js-letter">
            <a href="/About" className="btn">
              Show more
            </a>
          </div>
        </div>
        <a href="/About" className="image image--about">
          <div className="image__over">
            <div className="image__cover" />
            <div className="image__cover" />
          </div>
          <div className="page-num">
            <p>01</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ScAboutMe;
