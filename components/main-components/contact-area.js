import Image from "next/image";
import contactDots from "@/images/shapes/contact-dots.png";
import contactWaveLine from "@/images/shapes/contact-wave-line.png";
import sliderDots from "@/images/shapes/slider-dots.png";
import { useTranslations } from "next-intl";
import FormContactIndex from "../secondaries-components/form-contact-index";
const ContactArea = () => {
  const t = useTranslations('Messages');
  return (
    <section className="mb-4 contact-area overflow-hidden py-130 bgc-black-with-lighting rel z-1" id="contact">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-5 col-lg-6">
            <div className="contact-info-area text-white rmb-75 wow fadeInLeft delay-0-1s">
              <div className="section-title mb-55">
                <h2>
                  {t("contactarea_text")}{" "}
                  <span>{t("contactarea_span")}</span>
                </h2>
              </div>
              <div className="contact-info-wrap">
                <div className="contact-info-item">
                  <div className="icon">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="content">
                    <span className="title">{t("location")}</span>
                    <b className="text">{t("address")}</b>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="icon">
                    <i className="far fa-envelope-open-text" />
                  </div>
                  <div className="content">
                    <span className="title">{t("emailaddress")}</span>
                    <b className="text">
                      <a href="mailto:support@gmail.com">
                        {t("email")}
                      </a>
                    </b>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="icon">
                    <i className="far fa-phone" />
                  </div>
                  <div className="content">
                    <span className="title">{t("phonenumber")}</span>
                    <b className="text">
                      <a href="callto:+000(123)45699">{t("phone")}</a>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <FormContactIndex
              tsendmessage={t("sendmessage")}
              tname={t("name")}
              temailaddress={t("emailaddress")}
              tphonenumber={t("phonenumber")}
              twritemessage={t("writemessage")}
              tsave={t("save")}
              tsending={t("sending")}
              tsended={t("sended")}
            />
          </div>
        </div>
      </div>
      <div className="contact-shapes">
        <img
          className="shape circle"
          src="images/shapes/slider-dots.png"
          alt="Shape"
        />
        <img
          className="shape dots"
          src="images/shapes/contact-dots.png"
          alt="Shape"
        />
        <img
          className="shape wave-line"
          src="images/shapes/contact-wave-line.png"
          alt="Shape"
        />
      </div>
    </section>
  );
};
export default ContactArea;
