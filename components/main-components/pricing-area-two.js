
import { useTranslations } from "next-intl";
import Link from "next/link";

const PricingAreaTwo = () => {
  const t = useTranslations('Messages');
  return (
    <section className="pricing-area-two bgc-lighter pt-240 pb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-1s">
                <span className="sub-title mb-15">{t("pricingareatwo_title")}</span>
                <h2>{t("pricingareatwo_subtitle")}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="pricing-item-two wow fadeInUp delay-0-1s">
                <h4 className="title">{t("pricingareatwo_plantitle1")}</h4>
                <span className="badge">{t("popular_package")}</span>
                <div className="pricing-inner">
                  <ul className="list-style-two">
                    <li>{t("pricingareatwo_planlist1_1")}</li>
                    <li>{t("pricingareatwo_planlist1_2")}</li>
                    <li>{t("pricingareatwo_planlist1_3")}</li>
                    <li>{t("pricingareatwo_planlist1_4")}</li>
                    <li>{t("pricingareatwo_planlist1_5")}</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">248</span>
                      <span className="save">
                      {t("save")}<span> 25%</span>
                      </span>
                      <Link href="#contact">
                        <a className="theme-btn style-three">
                        {t("choose_package")}{" "}
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pricing-item-two wow fadeInUp delay-0-1s">
                <h4 className="title">{t("pricingareatwo_plantitle2")}</h4>
                <span className="badge">{t("popular_package")}</span>
                <div className="pricing-inner">
                  <ul className="list-style-two">
                    <li>{t("pricingareatwo_planlist2_1")}</li>
                    <li>{t("pricingareatwo_planlist2_2")}</li>
                    <li>{t("pricingareatwo_planlist2_3")}</li>
                    <li>{t("pricingareatwo_planlist2_4")}</li>
                    <li>{t("pricingareatwo_planlist2_5")}</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">248</span>
                      <span className="save">
                      {t("save")}<span> 25%</span>
                      </span>
                      <Link href="#contact">
                        <a className="theme-btn style-three">
                        {t("choose_package")}{" "}
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pricing-item-two wow fadeInUp delay-0-1s">
                <h4 className="title">{t("pricingareatwo_plantitle3")}</h4>
                <span className="badge">{t("popular_package")}</span>
                <div className="pricing-inner">
                  <ul className="list-style-two">
                    <li>{t("pricingareatwo_planlist3_1")}</li>
                    <li>{t("pricingareatwo_planlist3_2")}</li>
                    <li>{t("pricingareatwo_planlist3_3")}</li>
                    <li>{t("pricingareatwo_planlist3_4")}</li>
                    <li>{t("pricingareatwo_planlist3_5")}</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">248</span>
                      <span className="save">
                      {t("save")}<span> 25%</span>
                      </span>
                      <Link href="#contact">
                        <a className="theme-btn style-three">
                        {t("choose_package")}{" "}
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pricing-item-two wow fadeInUp delay-0-1s">
                <h4 className="title">{t("pricingareatwo_plantitle4")}</h4>
                <span className="badge">{t("popular_package")}</span>
                <div className="pricing-inner">
                  <ul className="list-style-two">
                    <li>{t("pricingareatwo_planlist4_1")}</li>
                    <li>{t("pricingareatwo_planlist4_2")}</li>
                    <li>{t("pricingareatwo_planlist4_3")}</li>
                    <li>{t("pricingareatwo_planlist4_4")}</li>
                    <li>{t("pricingareatwo_planlist4_5")}</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">248</span>
                      <span className="save">
                      {t("save")}<span> 25%</span>
                      </span>
                      <Link href="#contact">
                        <a className="theme-btn style-three">
                        {t("choose_package")}{" "}
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing-shapes">
          <img
            className="shape dots"
            src="images/shapes/pricing-bg-dots.png"
            alt="Shape"
          />
          <img
            className="shape wave"
            src="images/shapes/pricing-wave-line.png"
            alt="Shape"
          />
        </div>
      </section>
  );
};
export default PricingAreaTwo;
