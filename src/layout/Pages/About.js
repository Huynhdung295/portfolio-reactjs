import React from 'react'
import Footer from "../../components/Footer/Footer"
function About() {
    return (
       <main id="barba-wrapper">
  <div className="barba-container" data-namespace="underlayer">
    <div className="page-top">
      <div className="page-top__inner">
        <a className="back-arrow" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height={34} viewBox="0 0 67 34">
            <g fill="none" fillRule="evenodd" stroke="#FFF" strokeLinecap="round" transform="translate(2 1)">
              <path strokeWidth={2} d="M0,15.5533333 L64,15.5533333" />
              <polyline strokeWidth={2} points="15.556 0 0 15.556 15.556 31.111" />
            </g>
          </svg></a>
        <p className="scrollDown">SCROLLDOWN</p>
        <div className="title">
          <h2 className="title__text">About Me</h2>
          <div className="border js-toRight"><span /><span /></div>
          <p className="title__lead">
            I love Technology, Books,
            <br />and Learning.
          </p>
          <div className="btn-wrap">
            <a className="btn" href="#" target="_blank">More</a>
          </div>
        </div>
        <div className="image image__about" />
      </div>
    </div>
    <section className="wrapper">
      <div className="who container">
        <div className="text text--top">
          <p className="heading-num">01</p>
          <div className="text__wrap text__wrap--top content">
            <h2 className="heading heading--top">WHO I AM</h2>
            <div className="who__wrap">
              <div className="who__name">
                <h3 className="who__jp">HUỲNH DŨNG</h3>
                <p className="who__en">Front-end Dev</p>
              </div>
              <p className="who__text">
                Sinh năm 1999, là 1 lập trình viên trái ngành. Từ những năm cấp 2 3 tôi đã thích lập trình và tự học một vài thứ như HTML, C,.... Trải qua 3 năm đại học TDTU với chuyên ngành khác nhưng tôi đã quyết định đi tiếp con đường lập trình của mình.
                Ngoài ra tôi cũng từng và đang là CTV của mảng Esport VN (VNG).
              </p>
              <div className="who__image">
                <img src="./assets/img/imgAbout/Web-Developer.jpg" alt="Huynh Dung" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="passion container">
        <div className="text">
          <p className="heading-num">02</p>
          <div className="text__wrap content">
            <h2 className="heading">PASSION</h2>
          </div>
        </div>
        <div className="content content--mlarge">
          <ul className="passion__list">
            <li className="passion__item">
              <div className="passion__image">
                <img src="./assets/img/imgAbout/tech.svg" alt="tech" />
              </div>
              <h3 className="sub-title">TECHNOLOGY</h3>
              <p className="passion__text">
                Công nghệ có sức mạnh thay đổi cả thế giới và bản thân mình. Công nghệ không bao giờ ngừng phát triển. Vì thế tôi muốn trở thành một người có thể chạy theo, bắt kịp chúng và không bị bỏ lại
              </p>
            </li>
            <li className="passion__item">
              <div className="passion__image">
                <img src="./assets/img/imgAbout/book.svg" alt="book" />
              </div>
              <h3 className="sub-title">BOOK</h3>
              <p className="passion__text">
                Thế giới rộng lớn, vô số những điều mình chưa biết. Những cuốn sách là những bài học mà các tác giả, vĩ nhân,... tóm tắt lại cho chúng ta thấy được thế giới ngoài kia như thế nào. Đọc sách cũng là cách tham quan thế giới và là cách phát triển bản thân tốt nhất
              </p>
            </li>
            <li className="passion__item">
              <div className="passion__image">
                <img src="./assets/img/imgAbout/learning.svg" alt="STORY" />
              </div>
              <h3 className="sub-title">LEARNING</h3>
              <p className="passion__text">
                Học, học nữa, học mãi! Mình đã đi sau người ta thì phải cố gắng hơn rất nhiều. Ngưng lại đồng nghĩa chấm dứt hành trình sống của bản thân!
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="skill-set container">
        <div className="text">
          <p className="heading-num">03</p>
          <div className="text__wrap content">
            <h2 className="heading">SKILL SET</h2>
          </div>
        </div>
        <div className="content content--mlarge skill-set__flex">
          <ul className="skill-set__list">
            <li className="skill-set__item">
              <div className="skill-set__icon">
                <img src="./assets/img/imgAbout/HTML.png" alt="html" />
              </div>
              <div className="skill-set__detail">
                <div className="skill-set__meta">
                  <div className="skill-set__name">
                    <h4 className="small-title small-title--skill">
                      HTML5
                    </h4>
                    <p className="skill-set__year">1 YEARS</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="skill-set__item">
              <div className="skill-set__icon">
                <img src="./assets/img/imgAbout/CSS.png" alt="CSS" />
              </div>
              <div className="skill-set__detail">
                <div className="skill-set__meta">
                  <div className="skill-set__name">
                    <h4 className="small-title small-title--skill">CSS3</h4>
                    <p className="skill-set__year">1 YEARS</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="skill-set__item">
              <div className="skill-set__icon">
                <img src="./assets/img/imgAbout/JS.png" alt="JS" />
              </div>
              <div className="skill-set__detail">
                <div className="skill-set__meta">
                  <div className="skill-set__name">
                    <h4 className="small-title small-title--skill">Javascript</h4>
                    <p className="skill-set__year">HALF A YEAR</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="skill-set__item">
              <div className="skill-set__icon">
                <img className="bs" src="./assets/img/imgAbout/BS.png" alt="bs" />
              </div>
              <div className="skill-set__detail">
                <div className="skill-set__meta">
                  <div className="skill-set__name">
                    <h4 className="small-title small-title--skill">
                      Bootstrap 4 &amp; 5
                    </h4>
                    <p className="skill-set__year">1 YEARS</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="skill-set__item">
              <div className="skill-set__icon">
                <img src="./assets/img/imgAbout/PTS.png" alt="pts" />
              </div>
              <div className="skill-set__detail">
                <div className="skill-set__meta">
                  <div className="skill-set__name">
                    <h4 className="small-title small-title--skill">
                      Basic Photoshop
                    </h4>
                    <p className="skill-set__year">1 YEARS</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul className="skill-set__list">
            <li className="skill-set__item">
              <div className="skill-set__icon">
                <img src="./assets/img/imgAbout/react.png" alt="react" />
              </div>
              <div className="skill-set__detail">
                <div className="skill-set__meta">
                  <div className="skill-set__name">
                    <h4 className="small-title small-title--skill">ReactJS</h4>
                    <p className="skill-set__year">9 MONTHS</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="skill-set__item">
              <div className="skill-set__icon">
                <img src="./assets/img/imgAbout/Pug.png" alt="Pug" />
              </div>
              <div className="skill-set__detail">
                <div className="skill-set__meta">
                  <div className="skill-set__name">
                    <h4 className="small-title small-title--skill">Pug</h4>
                    <p className="skill-set__year">3 MONTHS</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="skill-set__item">
              <div className="skill-set__icon">
                <img src="./assets/img/imgAbout/Sass.png" alt="sass" />
              </div>
              <div className="skill-set__detail">
                <div className="skill-set__meta">
                  <div className="skill-set__name">
                    <h4 className="small-title small-title--skill">
                      SASS / SCSS
                    </h4>
                    <p className="skill-set__year">9 MONTHS</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="skill-set__item">
              <div className="skill-set__icon">
                <img src="./assets/img/imgAbout/gulp.png" alt="Gulp" />
              </div>
              <div className="skill-set__detail">
                <div className="skill-set__meta">
                  <div className="skill-set__name">
                    <h4 className="small-title small-title--skill">Gulp</h4>
                    <p className="skill-set__year">3 MONTHS</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="skill-set__item">
              <div className="skill-set__icon">
                <img src="./assets/img/imgAbout/github.png" alt="Git" />
              </div>
              <div className="skill-set__detail">
                <div className="skill-set__meta">
                  <div className="skill-set__name">
                    <h4 className="small-title small-title--skill">
                      Github / Gitlab
                    </h4>
                    <p className="skill-set__year">1 YEARS</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <footer>
    </footer></div>
</main>
 )
}

export default About
