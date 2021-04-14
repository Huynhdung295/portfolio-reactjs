import React from 'react'
import useTyped from "use-typed";
import Bang from "../../img/background/Bang.png";
import Yeah from "../../img/background/Yeah.png";
import Wow from "../../img/background/Wow.png";
import Cool from "../../img/background/Cool.png";
import Boom from "../../img/background/Boom.png";
import Hello from "../../img/background/Hello.png";

function ScHome() {
    const InforTyped = React.useRef(null);
    useTyped(InforTyped, {
      strings: ["Hồ Huỳnh Dũng", "A Front-end", " Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return (
        <div className="section">
        <div className="fullpage__slide">
          <div className="title title--top">
            <h1 className="title__text js-letter">
              I'm
              <br />
              <span ref={InforTyped} />
            </h1>
            <div className="border js-letter">
              <span /> <span className="js-letter" />
            </div>
            <p className="title__lead js-letter">
              Web designer
              <br />
              Front End Dev
            </p>
          </div>
          <div className="moon">
            <div className="moon__img js-parallax-moon">
              <div className="boom__front layer" data-depth="0.2">
                <div className="moon__text-wrap">
                  <p
                    className="moon__text js-boom at-item1"
                    data-depth="0.5"
                  >
                    PORTFOLIO
                  </p>
                </div>
              </div>
              <div className="boom__front layer" data-depth="0.8">
                <div className="boom boom--bang js-boom">
                  <img src={Bang} alt="bang" />
                </div>
              </div>
              <div className="boom__back layer" data-depth="0.4">
                <div className="boom boom--cool js-boom">
                  <img src={Cool} alt="cool" />
                </div>
              </div>
              <div className="boom__front layer" data-depth="0.6">
                <div className="boom boom--hello js-boom">
                  <img src={Hello} alt="hello" />
                </div>
              </div>
              <div className="boom__back layer" data-depth="0.5">
                <img className="js-boom" src={Boom} alt="boom" />
              </div>
              <div className="boom__front layer" data-depth="0.7">
                <div className="boom boom--wow js-boom">
                  <img src={Wow} alt="wow" />
                </div>
              </div>
              <div className="boom__back layer" data-depth="0.3">
                <div className="boom boom--yeah js-boom">
                  <img src={Yeah} alt="yeah" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    )
}

export default ScHome
