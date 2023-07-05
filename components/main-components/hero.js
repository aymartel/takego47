import Link from "next/link";
import heroThree from "@/images/hero/hero-three.svg";
import heroShape1 from "@/images/shapes/hero-shape1.png";
import heroShape2 from "@/images/shapes/hero-shape2.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { linesToParagraphs } from "utils/utils";

const Hero = () => {
  const t = useTranslations('Messages');
  return (
    <section className="hero-area-three pt-210 rpt-150 rel z-1">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-10 col-lg-11">
            <div className="hero-content-three text-center pt-10 mb-40 wow fadeInUp delay-0-1s">
              <h1>
              <span> {t("company")} </span> {t("slogan")}
              </h1>
              <>
              {linesToParagraphs(t("hero_text"))}
             
              </>
              <div className="hero-btns pt-5 wow fadeInUp delay-0-4s">
                <Link href="#about_us">
                  <a className="theme-btn mt-15">
                    {t("about_us")}{" "}
                    <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <a
                  href="https://www.youtube.com/watch?v=4XByEZM6pMw"
                  className="mfp-iframe video-play-text mt-15"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-three-image wow fadeInUp delay-0-6s">
          <Image  src={heroThree} alt="Hero" />
        </div>
      </div>
      <div className="hero-three-shapes">
        <div className="angle wow slideInDown delay-0-1s" />
        <div
          className="circle wow zoomInLeft delay-0-1s"
          data-wow-duration="2s"
        />
        <Image  
          className="shape-one"
          src={heroShape1}
          alt="Shape"
        />
        <Image  
          className="shape-two"
          src={heroShape2}
          alt="Shape"
        />
      </div>
    </section>
  );
};
export default Hero;

