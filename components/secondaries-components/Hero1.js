import { useTranslations } from "next-intl";
import Link from "next/link";
import Slider from "react-slick";

const Hero1 = () => {
  const t = useTranslations('Messages');
  const props = {
    infinite: true,
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToScroll: 1,
    slidesToShow: 1,
  };
  return (
    <section
      id="home"
      className="main-slider-area bgc-black-with-lighting rel z-1"
    >
      <Slider {...props} className="main-slider-active">
      <div className="slider-item">
          <div className="container">
            <div className="slider-content">
              <span className="sub-title">
                {t("hero_span3")}
              </span>
              <h1>{t("hero_title3")}</h1>
              <div className="slider-btns">
                <Link href="#contact">
                  <a className="theme-btn">
                  {t("hero_btfill")} <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <Link href="#services">
                  <a className="theme-btn style-three">
                  {t("hero_bt")} <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-video backgvideo1"

          >
            {/* <a
              href="https://www.youtube.com/watch?v=4XByEZM6pMw"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a> */}
            <span className="video-title cd-headline clip">
              <span className="cd-words-wrapper">
                <b className="is-visible">{t("hero_text3")}</b>
              </span>
            </span>
          </div>
        </div>
        
        <div className="slider-item">
          <div className="container">
            <div className="slider-content">
              <span className="sub-title">
                {t("hero_span1")}
              </span>
              <h1>{t("hero_title1")}</h1>
              <div className="slider-btns">
                <Link href="#contact">
                  <a className="theme-btn">
                  {t("hero_btfill")} <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <Link href="#services">
                  <a className="theme-btn style-three">
                  {t("hero_bt")} <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-video backgvideo2"

          >
            {/* <a
              href="https://www.youtube.com/watch?v=4XByEZM6pMw"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a> */}
            <span className="video-title cd-headline clip">
              <span className="cd-words-wrapper">
                <b className="is-visible">{t("hero_text1")}</b>
              </span>
            </span>
          </div>
        </div>
        
        <div className="slider-item">
          <div className="container">
            <div className="slider-content">
              <span className="sub-title">
                {t("hero_span2")}
              </span>
              <h1>{t("hero_title2")}</h1>
              <div className="slider-btns">
                <Link href="#contact">
                  <a className="theme-btn">
                  {t("hero_btfill")} <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <Link href="#services">
                  <a className="theme-btn style-three">
                  {t("hero_bt")} <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-video backgvideo3"

          >
            {/* <a
              href="https://www.youtube.com/watch?v=4XByEZM6pMw"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a> */}
            <span className="video-title cd-headline clip">
              <span className="cd-words-wrapper">
                <b className="is-visible">{t("hero_text2")}</b>
              </span>
            </span>
          </div>
        </div>

        
      </Slider>
      <div className="container">
        <div className="main-slider-dots"></div>
      </div>
      <div className="slider-shapes">

        <img
          className="shape dots one"
          src="images/shapes/slider-dots.png"
          alt="Shape"
        />
        <img
          className="shape dots two"
          src="images/shapes/slider-dots.png"
          alt="Shape"
        />
        <img
          className="shape wave-line"
          src="images/shapes/slider-wave-line.png"
          alt="Shape"
        />
        <img
          className="shape circle"
          src="images/shapes/slider-circle.png"
          alt="Shape"
        />

      </div>

    </section>
  );
};
export default Hero1;
