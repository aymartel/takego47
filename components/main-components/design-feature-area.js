
import Link from "next/link";
import featureImageTop from "@/images/shapes/feature-image-top.png";
import featureMiddle from "@/images/features/feature-middle.png";
import sliderDots from "@/images/shapes/slider-dots.png";
import featurewaveLine from "@/images/shapes/feature-wave-line.png";
import { useTranslations } from "next-intl";

const DesignFeatureArea = () => {
  const t = useTranslations('Messages');
  return (
    <section className="design-feature-area overflow-hidden pt-130 pb-100 text-white bgc-black-with-lighting rel z-1">
      <div className="container">
        <div className="section-title text-center mb-60 wow fadeInUp delay-0-1s">
          <span className="sub-title mb-10">{t("designfeaturearea_title")}</span>
          <h2>{t("designfeaturearea_subtitle")}</h2>
        </div>
        <div className="row no-gap align-items-center">
          <div className="col-lg-3">
            <div className="feature-left">
              <div className="row">
                <div className="col-lg-12 col-sm-6">
                  <div className="service-item style-three wow fadeInRight delay-0-1s">
                    <div className="icon">
                      <i className="flaticon-design" />
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="#service-details">
                          <a>{t("designfeaturearea_itemtitle1")}</a>
                        </Link>
                      </h4>
                      <Link href="#service-details">
                        <a className="more-btn">
                          <i className="fal fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-6">
                  <div className="service-item style-three wow fadeInRight delay-0-1s">
                    <div className="icon">
                      <i className="flaticon-web-page" />
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="#service-details">
                        <a>{t("designfeaturearea_itemtitle2")}</a>
                        </Link>
                      </h4>
                      <Link href="#service-details">
                        <a className="more-btn">
                          <i className="fal fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-middle rmt-30">
              <div className="image wow fadeInUp delay-0-1s">
                <img
                  className="circle-text"
                  src="images/shapes/feature-image-top.png"
                  alt="Text"
                />
                <img
                  className="round"
                  src="images/features/feature-middle.png" 
                  alt="Feature Middle"
                />
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="service-item style-three wow fadeInUp delay-0-1s">
                    <div className="icon">
                      <i className="flaticon-online" />
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="#service-details">
                        <a>{t("designfeaturearea_itemtitle3")}</a>
                        </Link>
                      </h4>
                      <Link href="#service-details">
                        <a className="more-btn">
                          <i className="fal fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="service-item style-three mt-30 wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="flaticon-web-programming" />
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="#service-details">
                        <a>{t("designfeaturearea_itemtitle4")}</a>
                        </Link>
                      </h4>
                      <Link href="#service-details">
                        <a className="more-btn">
                          <i className="fal fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="feature-right">
              <div className="row">
                <div className="col-lg-12 col-sm-6">
                  <div className="service-item style-three mt-100 wow fadeInLeft delay-0-1s">
                    <div className="icon">
                      <i className="flaticon-graphic-design" />
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="#service-details">
                        <a>{t("designfeaturearea_itemtitle5")}</a>
                        </Link>
                      </h4>
                      <Link href="#service-details">
                        <a className="more-btn">
                          <i className="fal fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-6">
                  <div className="service-item style-three wow fadeInLeft delay-0-1s">
                    <div className="icon">
                      <i className="flaticon-user-experience" />
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="#service-details">
                        <a>{t("designfeaturearea_itemtitle6")}</a>
                        </Link>
                      </h4>
                      <Link href="#service-details">
                        <a className="more-btn">
                          <i className="fal fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="design-feature-shapes">
        <img
          className="shape dots"
          src="images/shapes/slider-dots.png"
          alt="Shape"
        />
        <img
          className="shape wave-line"
          src="images/shapes/feature-wave-line.png"
          alt="Shape"
        />
      </div>
    </section>
  );
};
export default DesignFeatureArea;
