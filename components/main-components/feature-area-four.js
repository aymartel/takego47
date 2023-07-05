import Link from "next/link";
import { useTranslations } from "next-intl";

const FeatureAreaFour = () => {
  const t = useTranslations('Messages');
  return (
    <section className="feature-area-four pb-100 rel z-1" id="services">
      <div className="container">
        <div className="section-title text-center mb-50 wow fadeInUp delay-0-1s">
          <span className="sub-title style-two mb-15">{t("featureareafour_title")}</span>
          <h2>{t("featureareafour_subtitle1")} </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-md-6">
            <div className="feature-item-four wow fadeInUp delay-0-1s">
              <h4>
                <i className="flaticon-design" />
                <Link href="#service-details">
                  {t("featureitemfour_title1_1")}
                </Link>
              </h4>
              <p>
                {t("featureitemfour_text1_1")}
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="feature-item-four wow fadeInUp delay-0-5s">
              <h4>
                <i className="flaticon-graphic-design" />
                <Link href="#service-details">
                  {t("featureitemfour_title1_2")}
                </Link>
              </h4>
              <p>
                {t("featureitemfour_text1_2")}
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="feature-item-four wow fadeInUp delay-0-7s">
              <h4>
                <i className="flaticon-creativity" />
                <Link href="#service-details">
                  {t("featureitemfour_title1_3")}
                </Link>
              </h4>
              <p>
                {t("featureitemfour_text1_3")}
              </p>
            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className="feature-item-four wow fadeInUp delay-0-1s">
              <h4>
                <i className="flaticon-web-programming" />
                <Link href="#service-details">
                  {t("featureitemfour_title2_1")}
                </Link>
              </h4>
              <p>
                {t("featureitemfour_text2_1")}
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="feature-item-four wow fadeInUp delay-0-5s">
              <h4>
                <i className="flaticon-seo" />
                <Link href="#service-details">
                  {t("featureitemfour_title2_2")}
                </Link>
              </h4>
              <p>
                {t("featureitemfour_text2_2")}
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="feature-item-four wow fadeInUp delay-0-7s">
              <h4>
                <i className="flaticon-user-experience" />
                <Link href="#service-details">
                  {t("featureitemfour_title2_3")}
                </Link>
              </h4>
              <p>
                {t("featureitemfour_text2_3")}
              </p>
            </div>
          </div>
        </div>




      
      </div>
    </section>
  );
};
export default FeatureAreaFour;
