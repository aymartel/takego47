import Link from "next/link";
import Image from "next/image";
import Counter from "../secondaries-components/Counter";
import logoru from "@/images/features/support-features-bg.png";
import { useTranslations } from "next-intl";

const StadisticsArea = () => {
  const t = useTranslations('Messages');
  return (
    <section
        className="statistics-area-two bgc-lighter bgs-cover pt-130 pb-100 rel z-1"
        style={{
          backgroundImage:
            logoru,
        }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="statistics-two-content mb-30 rmb-35 wow fadeInRight delay-0-1s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">
                    {t("statisticsareatwo_subtitle")}
                  </span>
                  <h2>
                  {t("statisticsareatwo_title")}
                  </h2>
                </div>
                <p>
                {t("statisticsareatwo_text")}
                </p>
                <Link href="#about_us">
                  <a className="theme-btn mt-15">
                  {t("learnmore")} <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="statistics-two-counters mt-30">
                <div className="row">
                  <div className="col-xl-5 col-lg-6 col-md-5 col-sm-6">
                    <div className="counter-item counter-text-wrap wow fadeInLeft delay-0-1s">
                      <i className="flaticon-startup" />

                      <Counter end={2365} />
                      <span className="counter-title">{t("statisticsitemtwo_text1")} </span>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-5 col-sm-6">
                    <div className="counter-item for-margin counter-text-wrap wow fadeInLeft delay-0-5s">
                      <i className="flaticon-global" />
                      <Counter end={9632} />
                      <span className="counter-title">
                      {t("statisticsitemtwo_text2")}
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-5 col-sm-6 offset-xl-1">
                    <div className="counter-item counter-text-wrap wow fadeInLeft delay-0-1s">
                      <i className="flaticon-rating" />
                      <Counter end={8504} />
                      <span className="counter-title">{t("statisticsitemtwo_text2")}</span>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-5 col-sm-6">
                    <div className="counter-item for-margin counter-text-wrap wow fadeInLeft delay-0-5s">
                      <i className="flaticon-trophy" />
                      <Counter end={6763} />
                      <span className="counter-title">{t("statisticsitemtwo_text3")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
export default StadisticsArea;
