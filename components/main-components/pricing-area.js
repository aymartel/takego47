import Image from "next/image";
import PricingPlanItem from "../secondaries-components/pricing-plan-item ";
import pricingLight1 from "@/images/shapes/pricing-light1.png";
import pricingLight2 from "@/images/shapes/pricing-light2.png";
import { useTranslations } from "next-intl";
const PricingArea = () => {
  const t = useTranslations('Messages');
  return (
    <section className="pricing-area py-130 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title text-center mb-55 wow fadeInUp delay-0-1s">
              <span className="sub-title style-two mb-20">{t("pricingarea_subtitle")}</span>
              <h2>{t("pricingarea_title")}</h2>
            </div>
          </div>
        </div>
        <PricingPlanItem
          planTitle={t("plantitle_basic")}
          planItems={[
            t("plan1_service1"),t("plan1_service4"),
            t("plan1_service2"),t("plan1_service5"),
            t("plan1_service3"),t("plan1_service6"),
            t("plan1_service7")]}
          planprice={350}
          savepercent={25}
        />
        <PricingPlanItem
          planTitle={t("plantitle_standard")}
          planItems={[
            t("plan1_service1"),t("plan2_service4"),
            t("plan1_service2"),t("plan2_service6"),
            t("plan1_service3"),t("plan2_service5"),
            t("plan2_service7"), t("plan2_service9"),
            t("plan2_service8")
          ]}
          planprice={450}
          savepercent={25}
        />
        <PricingPlanItem
          planTitle={t("plantitle_premiun")}
          planItems={[
            t("plan1_service1"),t("plan3_service4"),
            t("plan1_service2"),t("plan3_service6"),
            t("plan1_service3"),t("plan3_service5"),
            t("plan2_service7"), t("plan3_service9"),
            t("plan3_service8")
          ]}
          planprice={600}
          savepercent={25}
        />

      </div>
      <div className="wave-shapes">
        <Image
          className="shape one"
          src={pricingLight1}
          alt="Wave Shape"
        />
        <Image
          className="shape two"
          src={pricingLight2}
          alt="Wave Shape"
        />
      </div>
    </section>
  );
};
export default PricingArea;
