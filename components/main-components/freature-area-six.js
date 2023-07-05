import Link from "next/link";
import Image from "next/image";
import FeatureItemThree from "../secondaries-components/feature-item-three";
import { useTranslations } from "next-intl";

const FreatureAreaSix = () => {
  const t = useTranslations('Messages');
  return (
    <section className="freature-area-six rel z-2 ">
      <div className="container">
        <div
          className="feature-six-inner bgs-cover bgc-primary"
          style={{
            backgroundImage:
              "url(assets/images/background/freature-bg-line.png)",
          }}
        >
          <div className="row">
            <div className="col-lg-6">
              <FeatureItemThree
                srcIcon="flaticon-technical-support"
                title={t("featureitemthree_title1")}
                text={t("featureitemthree_text1")}
              />
            </div>
            <div className="col-lg-6">
              <FeatureItemThree
                srcIcon="flaticon-app-development"
                title={t("featureitemthree_title2")}
                text={t("featureitemthree_text2")}
              />

            </div>
            <div className="col-lg-6">
              <FeatureItemThree
                srcIcon="flaticon-settings"
                title={t("featureitemthree_title3")}
                text={t("featureitemthree_text3")}
              />
            </div>
            <div className="col-lg-6">
              <FeatureItemThree
                srcIcon="flaticon-optimization"
                title={t("featureitemthree_title4")}
                text={t("featureitemthree_text4")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FreatureAreaSix;
