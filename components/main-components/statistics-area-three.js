import Counter from "@/components/secondaries-components/Counter";

import Image from "next/image";

import statictics from "@/images/about/statictics.jpg";
import { useTranslations } from "next-intl";


const StatisticsAreaThree = () => {
  const t = useTranslations('Messages');
  return (
    <section className="statistics-area-three bgs-cover pb-100 rel z-1">
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-7">
          <div className="statistics-three-content rmb-65 wow fadeInRight delay-0-1s">
            <div className="row justify-content-center justify-content-xl-start">
              <div className="col-xl-9">
                <div className="section-title mb-60">
                  <span className="sub-title mb-15">
                    {t("statisticsareathree_title")}
                  </span>
                  <h2>{t("statisticsareathree_subtitle")}</h2>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                <div className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-1s">
                  <i className="flaticon-startup" />
                  <Counter end={2365} />
                  <span className="counter-title">{t("statisticsareathree_itemtitle1")}</span>
                  <p>{t("statisticsareathree_itemtext1")}</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                <div className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-5s">
                  <i className="flaticon-global" />
                  <Counter end={5234} />
                  <span className="counter-title">{t("statisticsareathree_itemtitle2")}</span>
                  <p>{t("statisticsareathree_itemtext2")}</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                <div className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-7s">
                  <i className="flaticon-rating" />
                  <Counter end={8532} />
                  <span className="counter-title">{t("statisticsareathree_itemtitle3")}</span>
                  <p>{t("statisticsareathree_itemtext3")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="statistics-three-image bg-squire-shape mb-30 wow fadeInLeft delay-0-1s">
            <Image
              src={statictics}
              alt="Statictics"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
export default StatisticsAreaThree;
