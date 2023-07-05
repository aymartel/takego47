import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const FeatureAreaFive = () => {
  const t = useTranslations('Messages');
  return (
    <section className="feature-area-five bgc-lighter pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-1s">
            <span className="sub-title mb-10">{t("featureareafive_title")}</span>
            <h2>{t("featureareafive_subtitle")}</h2>
          </div>
          <div className="row row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col wow fadeInUp delay-0-1s">
              <div className="feature-item-five">
                <i className="flaticon-responsive" />
                <h5>
                  <Link href="#service-details">
                    <a>{t("featureareafive_item1")}</a>
                  </Link>
                </h5>
              </div>
            </div>
            <div className="col wow fadeInUp delay-0-1s">
              <div className="feature-item-five">
                <i className="flaticon-feature" />
                <h5>
                  <Link href="#service-details">
                    <a>{t("featureareafive_item2")}</a>
                  </Link>
                </h5>
              </div>
            </div>
            <div className="col wow fadeInUp delay-0-4s">
              <div className="feature-item-five">
                <i className="flaticon-aim" />
                <h5>
                  <Link href="#service-details">
                    <a>{t("featureareafive_item3")}</a>
                  </Link>
                </h5>
              </div>
            </div>
            <div className="col wow fadeInUp delay-0-5s">
              <div className="feature-item-five">
                <i className="flaticon-seo" />
                <h5>
                  <Link href="#service-details">
                    <a>{t("featureareafive_item4")}</a>
                  </Link>
                </h5>
              </div>
            </div>
            <div className="col wow fadeInUp delay-0-6s">
              <div className="feature-item-five">
                <i className="flaticon-search-location" />
                <h5>
                  <Link href="#service-details">
                    <a>{t("featureareafive_item5")}</a>
                  </Link>
                </h5>
              </div>
            </div>
            <div className="col wow fadeInUp delay-0-7s">
              <div className="feature-item-five">
                <i className="flaticon-settings" />
                <h5>
                  <Link href="#service-details">
                    <a>{t("featureareafive_item6")}</a>
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
export default FeatureAreaFive;
