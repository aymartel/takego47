import Link from "next/link";
import Image from "next/image";
import Counter from "../secondaries-components/Counter";
import { useTranslations } from "next-intl";

const StatisticsAreaFour = () => {
  
  const t = useTranslations('Messages');
  return (
    <div className="statistics-area-four rel z-1">
        <div className="container">
          <div
            className="statistics-four-counters bgs-cover bgc-lighter"
          >
            <div className="row medium-gap">
              <div className="col-xl-3 col-sm-6">
                <div className="counter-item mt-30 counter-text-wrap wow fadeInLeft delay-0-1s">
                  <i className="flaticon-startup" />
                  <Counter end={2365} />
                  <span className="counter-title">{t("countertitle1")}</span>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="counter-item for-margin counter-text-wrap wow fadeInLeft delay-0-4s">
                  <i className="flaticon-global" />
                  <Counter end={9632} />
                  <span className="counter-title">{t("countertitle2")}</span>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="counter-item mt-20 counter-text-wrap wow fadeInLeft delay-0-6s">
                  <i className="flaticon-rating" />
                  <Counter end={2365} />
                  <span className="counter-title">{t("countertitle3")}</span>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="counter-item for-margin counter-text-wrap wow fadeInLeft delay-0-8s">
                  <i className="flaticon-trophy" />
                  <Counter end={6763} />
                  <span className="counter-title">{t("countertitle4")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default StatisticsAreaFour;
