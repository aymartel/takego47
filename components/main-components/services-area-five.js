import Link from "next/link";
import Image from "next/image";
import ServiceItemFive from "../secondaries-components/service-item-five";
import { useTranslations } from "next-intl";

import icon1 from "@/images/services/icon1.png";
import icon2 from "@/images/services/icon2.png";
import icon3 from "@/images/services/icon3.png";
import icon4 from "@/images/services/icon4.png";
import icon5 from "@/images/services/icon5.png";
import icon6 from "@/images/services/icon6.png";
const ServicesAreaFive = () => {

  const t = useTranslations('Messages');
  return (
    <section className="services-area-five pt-115 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-1s">
              <span className="sub-title style-two mb-20">{t("servicesareafive_title")}</span>
              <h2>{t("servicesareafive_subtitle")}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <ServiceItemFive
              icon={icon1}
              title={t("serviceitemfive_title1")}
              text={t("serviceitemfive_text1")}
              delay={1}
              btnText={t("learnmore")} />

          </div>
          <div className="col-xl-4 col-md-6">
          <ServiceItemFive
              icon={icon2}
              title={t("serviceitemfive_title2")}
              text={t("serviceitemfive_text2")}
              delay={4}
              btnText={t("learnmore")} />

           
          </div>
          <div className="col-xl-4 col-md-6">
          <ServiceItemFive
              icon={icon3}
              title={t("serviceitemfive_title3")}
              text={t("serviceitemfive_text3")}
              delay={6}
              btnText={t("learnmore")} />
            
          </div>
          <div className="col-xl-4 col-md-6">
            <ServiceItemFive
              icon={icon4}
              title={t("serviceitemfive_title4")}
              text={t("serviceitemfive_text4")}
              delay={1}
              btnText={t("learnmore")} />

          </div>
          <div className="col-xl-4 col-md-6">
          <ServiceItemFive
              icon={icon5}
              title={t("serviceitemfive_title5")}
              text={t("serviceitemfive_text5")}
              delay={4}
              btnText={t("learnmore")} />

           
          </div>
          <div className="col-xl-4 col-md-6">
          <ServiceItemFive
              icon={icon6}
              title={t("serviceitemfive_title6")}
              text={t("serviceitemfive_text6")}
              delay={6}
              btnText={t("learnmore")} />
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesAreaFive;
