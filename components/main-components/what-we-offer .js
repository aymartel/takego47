import { useTranslations } from "next-intl";
import Link from "next/link";

const WhatWeOffer = () => {
  const t = useTranslations('Messages');
  return (
    <section className="what-we-offer my-130 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="what-we-offer-left mb-30 rmb-65 wow fadeInRight delay-0-1s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">
                    {t("whatweoffer_title")}
                  </span>
                  <h2>
                  {t("whatweoffer_title")}
                  </h2>
                </div>
                <p>
                {t("whatweoffer_text1")}
                </p>
                <Link href="#about_us">
                  <a className="theme-btn mt-15">
                  {t("learnmore")}<i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="what-we-offer-right wow fadeInLeft delay-0-1s">
                <p>
                {t("whatweoffer_text2")}
                </p>
                <ul className="list-style-four pt-5">
                  <li> {t("whatweoffer_list1")}</li>
                  <li> {t("whatweoffer_list2")}</li>
                  <li> {t("whatweoffer_list3")}</li>
                  <li> {t("whatweoffer_list4")}</li>
                  <li> {t("whatweoffer_list5")}</li>
                  <li> {t("whatweoffer_list6")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
export default WhatWeOffer;
