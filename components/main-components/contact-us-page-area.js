import { useTranslations } from "next-intl";
import FormContact from "../secondaries-components/form-contact";

const ContactUsPageArea = () => {
  const t = useTranslations('Messages');

  return (
    <section className="contact-us-page-area py-130" id="contact">
      <div className="container">
        <div className="row align-items-end justify-content-between">
          <div className="col-lg-7">
            <div className="contact-content rmb-65 wow fadeInRight delay-0-1s">
              <div className="section-title mb-25">
                <span className="sub-title style-two mb-15">{t("contactuspagearea_title")}</span>
                <h2>
                  {t("contactuspagearea_subtitle")}
                </h2>
              </div>
              <p>
                {t("contactuspagearea_text")}
              </p>
              <FormContact />
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="contact-info wow fadeInLeft delay-0-1s">
              <div className="contact-info-item style-two">
                <div className="icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <div className="content">
                  <span className="title"> {t("location")}</span>
                  <span className="text">
                    {t("address")}
                  </span>
                </div>
              </div>
              <div className="contact-info-item style-two">
                <div className="icon">
                  <i className="far fa-envelope-open-text" />
                </div>
                <div className="content">
                  <span className="title">{t("emailaddress")}</span>
                  <span className="text">
                    <a href={`mailto:${t("emailaddress")}`}>
                      {t("email")}
                    </a>
                    
                  </span>
                </div>
              </div>
              <div className="contact-info-item style-two">
                <div className="icon">
                  <i className="far fa-phone" />
                </div>
                <div className="content">
                  <span className="title">{t("phonenumber")}</span>
                  <span className="text">
                    <a href="calto:+79939036475">{t("phone")}</a>

                  </span>
                </div>
              </div>
              <div className="follow-us">
                <h4>Follow Us</h4>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-behance" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUsPageArea;
