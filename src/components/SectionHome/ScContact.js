import React from 'react'

function ScContact() {
    return (
        <div className="section">
            <div className="fullpage__slide">
              <div className="title">
                <h2 className="title__text js-letter">Touch To Contact</h2>
                <div className="border js-letter">
                  <span />
                  <span className="js-letter" />
                </div>
                <ul>
                  <li className="js-letter">
                    <a href="mailto:hohuynhdung@gmail.com">
                      hohuynhdung@gmail.com
                    </a>
                  </li>
                  <li className="js-letter">
                    <a href="/" target="_blank">
                      HUYNHDUNG
                    </a>
                  </li>
                  <li className="js-letter">
                    <a href="/" target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="/" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="/" target="_blank">
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="image image--contact">
                <div className="image__over">
                  <div className="image__cover" />
                  <div className="image__cover" />
                </div>
                <div className="page-num">
                  <p>04</p>
                </div>
              </div>
            </div>
          </div>
       
    )
}

export default ScContact
