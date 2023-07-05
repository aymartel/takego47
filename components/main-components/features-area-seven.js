import { useTranslations } from "next-intl";
import FeatureItemSeven from "../secondaries-components/feature-item-seven";

const FeaturesAreaSeven = () => {
  const t = useTranslations('Messages');
  return (
    <section className="features-area-seven pb-100 rel z-1">
        <div className="container">
          <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
          
            <FeatureItemSeven
            icon ="flaticon-idea"
            title = {t("featureitemseven_title1")}
            text = {t("featureitemseven_text1")}
            color=""
            />
            <FeatureItemSeven
            icon ="flaticon-graphic-design"
            title = {t("featureitemseven_title2")}
            text = {t("featureitemseven_text2")}
            color="color-two"
            />
            <FeatureItemSeven
            icon ="flaticon-coding-2"
            title = {t("featureitemseven_title3")}
            text = {t("featureitemseven_text3")}
            color="color-three"
            />
            <FeatureItemSeven
            icon ="flaticon-checklist"
            title = {t("featureitemseven_title4")}
            text = {t("featureitemseven_text4")}
            color="color-four"
            />
            <FeatureItemSeven
            icon ="flaticon-goal"
            title = {t("featureitemseven_title5")}
            text = {t("featureitemseven_text5")}
            color="color-five"
            />
          </div>
        </div>
      </section>
  );
};
export default FeaturesAreaSeven;
