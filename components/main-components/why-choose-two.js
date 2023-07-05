import Link from "next/link";
import Image from "next/image";
import whyChooseUsTwo from "@/images/about/why-choose-us-two.png";
import { useTranslations } from "next-intl";

const WhyChooseTwo = () => {
  const t = useTranslations('Messages');
  return (
    <section className="why-choose-two-area py-130 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="why-choose-two-image rmb-65 wow fadeInUp delay-0-4s">
                <Image  
                  src={whyChooseUsTwo}
                  alt="why choose us"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="why-choose-two-content wow fadeInUp delay-0-1s">
                <div className="section-title mb-35">
                  <span className="sub-title style-two mb-15">
                   {t("whychosetwoarea_subtitle")}
                  </span>
                  <h2>{t("whychosetwoarea_title")}</h2>
                </div>
                <ul className="list-style-one">
                  <li>
                    <div className="content">
                      <h5>{t("whychosetwocontent_subtitle1")}</h5>
                      <p>
                      {t("whychosetwocontent_text1")}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                    <h5>{t("whychosetwocontent_subtitle2")}</h5>
                      <p>
                      {t("whychosetwocontent_text2")}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                    <h5>{t("whychosetwocontent_subtitle3")}</h5>
                      <p>
                      {t("whychosetwocontent_text3")}
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
export default WhyChooseTwo;
