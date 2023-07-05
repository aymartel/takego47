import { useTranslations } from "next-intl";
import ProgressBar from "../secondaries-components/ProgressBar";

const SupportMarketingArea = () => {
  const t = useTranslations('Messages');
  return (
    <section className="support-marketing-area py-130 rel z-1">
      <div className="container">
        <div className="row large-gap justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="support-marketing-progress rmb-65 wow fadeInUp delay-0-4s">
              <div className="section-title mb-35">
                <span className="sub-title style-two mb-15">
                 {t("supportmarketingarea_title")}
                </span>
                <h2> {t("supportmarketingarea_subtitle")}</h2>
              </div>
              <p>
              {t("supportmarketingarea_text")}
              </p>
              <div className="circle-counter">
                <div className="circle-progress-item">
                  <ProgressBar value={89} color="#3180fc" />
                  <h5>{t("supportmarketingarea_stadistic1")}</h5>
                </div>
                <div className="circle-progress-item">
                  <ProgressBar value={76} color="#f1b000" />
                  <h5>{t("supportmarketingarea_stadistic2")}</h5>
                </div>
                <div className="circle-progress-item">
                  <ProgressBar value={63} color="#16b4f2" />
                  <h5>{t("supportmarketingarea_stadistic3")}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="support-marketing-list wow fadeInUp delay-0-1s">
              <ul className="list-style-one">
                <li>
                  <div className="content">
                    <h5>{t("supportmarketinglist_title1")}</h5>
                    <p>
                    {t("supportmarketinglist_text1")}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="content">
                  <h5>{t("supportmarketinglist_title2")}</h5>
                    <p>
                    {t("supportmarketinglist_text2")}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="content">
                  <h5>{t("supportmarketinglist_title2")}</h5>
                    <p>
                    {t("supportmarketinglist_text3")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SupportMarketingArea;
