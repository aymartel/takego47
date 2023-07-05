import Image from "next/image";
import wwDo1 from "@/images/about/ww-do1.png";
import { useTranslations } from "next-intl";
import FeatureItemThree from "../secondaries-components/feature-item-three";
const WeDoArea = () => {

  const t = useTranslations('Messages');
  return (
    <section className="ww-do-area pt-100 pb-130 rel z-1">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="ww-do-content rmb-65">
              <div className="section-title mb-40 wow fadeInRight delay-0-1s">
                <span className="sub-title style-two mb-15">{t("wwdoarea_title")}</span>
                <h2>{t("wwdoarea_subtitle")}</h2>
              </div>
              <div className="feature-three-wrap">
                <FeatureItemThree
                  srcIcon="flaticon-technical-support"
                  title={t("featureitemthree_title1")}
                  text={t("featureitemthree_text1")}
                />
                <FeatureItemThree
                  srcIcon="flaticon-app-development"
                  title={t("featureitemthree_title2")}
                  text={t("featureitemthree_text2")}
                />
                <FeatureItemThree
                  srcIcon="flaticon-settings"
                  title={t("featureitemthree_title3")}
                  text={t("featureitemthree_text3")}
                />
              </div>
              <FeatureItemThree
                srcIcon="flaticon-optimization"
                title={t("featureitemthree_title4")}
                text={t("featureitemthree_text4")}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ww-do-images">
              <Image
                className="image-one wow fadeInDown delay-0-1s"
                src={wwDo1}
                alt="What We Do"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WeDoArea;
