import Link from "next/link";
import Image from "next/image";
import wwDo1 from "@/images/about/ww-do1.png";
import wwDo2 from "@/images/about/ww-do2.png";
import wwDo3 from "@/images/about/ww-do3.png";
import { useTranslations } from "next-intl";

const WwdoTwoArea = () => {
  const t = useTranslations('Messages');
  return (
    <section className="ww-do-two-area py-130 rel z-1" id="about_us">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="ww-do-two-content rmb-65 wow fadeInUp delay-0-1s">
                <div className="section-title mb-30">
                  <span className="sub-title style-two mb-15">{t("wwdotwoarea_title")}</span>
                  <h2>{t("wwdotwoarea_subtitle")}</h2>
                </div>
                <p>
                {t("wwdotwoarea_text")}
                </p>
                <div className="row pt-15">
                  <div className="col-sm-6">
                    <div className="feature-item-two border-right pe-sm-3">
                      <div className="icon">
                        <i className="fas fa-check" />
                      </div>
                      <h5>{t("featureitemtwo_title1")}</h5>
                      <p>
                      {t("featureitemtwo_text1")}
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-item-two color-two">
                      <div className="icon">
                        <i className="fas fa-check" />
                      </div>
                      <h5>{t("featureitemtwo_title2")}</h5>
                      <p>
                      {t("featureitemtwo_text2")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ww-do-btns">
                  <Link href="#about_us">
                    <a className="theme-btn mt-15">
                    {t("featureitemtwo_button")}
                      <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <a
                    href="https://www.youtube.com/watch?v=4XByEZM6pMw"
                    className="mfp-iframe video-play-text mt-15"
                  >
                    <i className="fas fa-play" /> <span> {t("featureitemtwo_videobtn")}</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ww-do-two-images rel">
                <div className="row">
                  <div className="col-sm-7 offset-1">
                    <Image  
                      className="image-one wow fadeInUp delay-0-4s"
                      src={wwDo1}
                      alt="What We Do"
                    />
                  </div>
                  <div className="col-sm-4">
                    <Image  
                      className="image-two wow fadeInUp delay-0-6s"
                      src={wwDo2}
                      alt="What We Do"
                    />
                    <Image  
                      className="image-three wow fadeInUp delay-0-8s"
                      src={wwDo3}
                      alt="What We Do"
                    />
                  </div>
                </div>
                <div className="year-of-experience wow zoomIn delay-0-6s">
                  <span className="number">25</span>
                  {t("yearofexperience")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
export default WwdoTwoArea;
