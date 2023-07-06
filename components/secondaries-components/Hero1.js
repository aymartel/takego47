import { useTranslations } from "next-intl";
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
        <div className="slider-item flex-row-reverse">
          <div className="container ">
            <div className="slider-content">

              <h1>{t("hero_title3")}</h1>

            </div>
          </div>
          <div
            className="slider-video backgvideo1"

          >
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
