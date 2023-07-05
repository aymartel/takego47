
import Image from "next/image";

import aboutOne from "@/images/about/about-one.jpg";
import imageLeft from "@/images/shapes/image-left.png";
import { useTranslations } from "next-intl";

const AboutAreaOne = () => {
  const t = useTranslations('Messages');
  return (
    <section className="about-area-one pt-130 pb-125 rel z-1" id="about_us">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="about-image-one bg-squire-shape rmb-85 wow fadeInUp delay-0-1s">
                <Image src={aboutOne} alt="About us" />
             
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about-content-one wow fadeInUp delay-0-4s">
                <div className="section-title mb-45">
                  <span className="sub-title mb-15">
                    {t("aboutareaone_title")}
                  </span>
                  <h2>{t("aboutareaone_subtitle")}</h2>
                </div>
                <ul className="list-style-one">
                  <li>
                    <div className="content">
                      <h4>{t("aboutareaone_listtitle1")}</h4>
                      <p>
                      {t("aboutareaone_listtext1")}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                    <h4>{t("aboutareaone_listtitle2")}</h4>
                      <p>
                      {t("aboutareaone_listtext2")}
                      </p>
                    </div>
                  </li>
                  {/* <li>
                    <div className="content">
                    <h4>{t("aboutareaone_listtitle3")}</h4>
                      <p>
                      {t("aboutareaone_listtext3")}
                      </p>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
export default AboutAreaOne;
