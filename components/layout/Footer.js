import Link from "next/link";
import Image from "next/image";
import logoThree from "@/images/logos/logo2.svg";
import { useTranslations } from "next-intl";
import { useForm } from "utils/utils";
import { useState } from "react";
import axios from "axios";
const Footer = ({ footer }) => {
  const t = useTranslations('Messages');
  const initialForm = {
    name: '',
    email: '',
    number: '',
    message: '',
  }
  const [values, handleInputChange, reset] = useForm(initialForm);
  const { name, email, number, message } = values;
  const [loading, setloading] = useState(false);
  const [sended, setsended] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setloading(true)
    setsended(false)
    try {

      await axios.post('/api/send-email', JSON.stringify({ name, email, number, message }), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(function (response) {
          console.log(response);
          setsended(true)
        })

    } catch (error) {
      console.error(error);
      setsended(false)
    }
    reset();
    setloading(false);
  };

  return <footer className="main-footer pt-80">
    <div className="container">
      <div className="row justify-content-xl-between justify-content-center">
        <div className="col-xl-4 col-lg-5 col-md-6">
          <div className="footer-widget widget_about me-md-5 wow fadeInUp delay-0-1s">
            <div className="footer-logo mb-25">
              <Link href="#">
                <a>
                  <Image src={logoThree} alt="Logo" />
                </a>
              </Link>
            </div>
            <p>
              {t("footer_description")}
            </p>
            <div className="social-style-two pt-5">
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
        <div className="col-xl-4 col-md-6">
          <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
            <h4 className="footer-title">{t("footer_quicklinks")}</h4>
            <ul className="list-style-two">
              <li>
                <Link href="#home">{t("home")}</Link>
              </li>
              <li>
                <Link href="#about_us">{t("about_us")}</Link>
              </li>
              <li>
                <Link href="#services">{t("services")}</Link>
              </li>
              <li>
                <Link href="#faqs">{t("faqs")}</Link>
              </li>

              <li>
                <Link href="#contact">{t("contact")}</Link>
              </li>

            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-8">
          <div className="footer-widget widget_newsletter wow fadeInUp delay-0-6s">
            <h4 className="footer-title">{t("footer_newsletter")}</h4>
            <p>{t("footer_newslettertext")}</p>
            <form onSubmit={handleSubmit}>
            <input
                  type="email"
                  id="blog-email"
                  name="email"
                  className="form-control"
                  placeholder={t("emailaddress")}
                  required
                  value={email}
                  onChange={handleInputChange}
                />
              <button className="theme-btn" type="submit">
                {t("save")} <i className="fas fa-angle-double-right" />
              </button>
              {loading ? <h6 className="mt-2">{t("sending")}</h6> : ""}
                {sended ? <h6 className="mt-2 ">{t("sended")}</h6> : ""}
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom mt-30 pt-25 pb-10">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="copyright-text text-center text-lg-start">
              <p>© Copyright {new Date().getFullYear()} Andy Martel. {t("footer_copyright")}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer-bottom-menu mb-10 text-center text-lg-end">
              <ul>
                {/* <li>
                  <a href="#">Setting &amp; Privacy</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Faqs</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        {/* Scroll Top Button */}
        <button className="scroll-top scroll-to-target" data-target="html">
          <span className="fas fa-angle-double-up" />
        </button>
      </div>
    </div>
  </footer>;




};
export default Footer;

