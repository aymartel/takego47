import Link from "next/link";
import Image from "next/image";
import worpProcessStep from "@/images/shapes/worp-process-step.png";
import { useTranslations } from "next-intl";

const WorkProcess = () => {
  const t = useTranslations('Messages');
  return (
    <section className="work-process-area pb-95 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-1s">
                <span className="sub-title style-two mb-15">
               
                </span>
                <h2> {t("workprocess_title")}</h2>
              </div>
            </div>
          </div>
          <div className="work-process-wrap rel z-1">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item mt-30 wow fadeInUp delay-0-1s">
                  <div className="icon">
                    <span className="number">01</span>
                    <i className="flaticon-user-experience" />
                  </div>
                  <h4>{t("workprocessitem_title1")}</h4>
                  <p>{t("workprocessitem_description1")}</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item wow fadeInUp delay-0-4s">
                  <div className="icon">
                    <span className="number">02</span>
                    <i className="flaticon-coding-2" />
                  </div>
                  <h4>{t("workprocessitem_title2")}</h4>
                  <p>{t("workprocessitem_description2")}</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item mt-55 wow fadeInUp delay-0-6s">
                  <div className="icon">
                    <span className="number">03</span>
                    <i className="flaticon-aim" />
                  </div>
                  <h4>{t("workprocessitem_title3")}</h4>
                  <p>{t("workprocessitem_description3")}</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item mt-45 wow fadeInUp delay-0-8s">
                  <div className="icon">
                    <span className="number">04</span>
                    <i className="flaticon-star" />
                  </div>
                  <h4>{t("workprocessitem_title4")}</h4>
                  <p>{t("workprocessitem_description4")}</p>
                </div>
              </div>
            </div>
            <div className="work-process-shape" >
              <Image  
                src={worpProcessStep}
                alt="Shape"
              />
            </div>
          </div>
        </div>
      </section >
  );
};
export default WorkProcess;
