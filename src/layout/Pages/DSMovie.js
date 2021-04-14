import React from 'react'

function DSMovie() {
    return (
        <main id="barba-wrapper">
        <div class="barba-container" data-namespace="underlayer">
          <div class="page-top">
            <div class="page-top__inner">
              <a class="back-arrow" href="./#prj1"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="34"
                  viewBox="0 0 67 34">
                  <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-linecap="round" transform="translate(2 1)">
                    <path stroke-width="2" d="M0,15.5533333 L64,15.5533333" />
                    <polyline stroke-width="2" points="15.556 0 0 15.556 15.556 31.111" />
                  </g>
                </svg></a>
              <p class="scrollDown">SCROLLDOWN</p>
              <div class="title">
                <h2 class="title__text">DS<br />Movie</h2>
                <div class="border js-toRight"><span></span><span></span></div>
                <p class="title__lead">Website, App</p>
                <div class="btn-wrap">
                  <a class="btn" href="https://dsmovie.vercel.app/" target="_blank">Visit site</a>
                </div>
              </div>
              <div class="image image__reile"></div>
            </div>
          </div>
          <section class="wrapper">
            <div class="meta" data-emergence="hidden">
              <div class="meta__back"></div>
              <div class="content meta__text-wrap">
                <ul class="meta__text">
                  <li>
                    <p class="small-title">ROLE</p>
                    <p>UI/UX design / Coding</p>
                  </li>
                  <li>
                    <p class="small-title">DATE</p>
                    <p>FEB 2021</p>
                  </li>
                  <li>
                    <p class="small-title">OVERVIEW</p>
                    <p> Đồ án cuối khóa Cybersoft
                    </p>
                  </li>
                </ul>
              </div>
              <div class="content">
                <img src="./assets/img/imgPrj1/ds1.png" alt="DS Movie" />
              </div>
            </div>
            <div class="text">
              <p class="heading-num">01</p>
              <div class="text__wrap">
                <h2 class="heading">CONCEPT</h2>
                <p class="text__works">
                  Website/App đặt vé xem phim (Coming soon...)
                </p>
              </div>
            </div>
            <div class="big-image"></div>
            <div class="text">
              <p class="heading-num">02</p>
              <div class="text__wrap">
                <h2 class="heading heading--left">DEVELOPMENT</h2>
                <p class="text__works">
                  Web sử dụng công nghệ ReactJS với Hook, Class, lazyload,...v..v. Ngoài ra còn có các thư viện như Material UI, BS4, Jquery. Web sử dụng NodeJS, API từ phía Cybersoft,...v..v
                </p>
              </div>
            </div>
            <div class="kamp">
              <ul>
                <li><img src="./assets/img/imgPrj1/ds2.png" alt="TOP" /></li>
                <li><img src="./assets/img/imgPrj1/ds3.png" alt="ABOUT" /></li>
              </ul>
            </div>
            <div class="content content--mlarge back-btn-wrap">
              <a class="back-btn" href="./#prj1">BACK</a>
            </div>
          </section>
        </div>
      </main>
    )
}

export default DSMovie
