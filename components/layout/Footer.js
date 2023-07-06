import { useTranslations } from "next-intl";
import logotext from "@/images/take/logotext.svg";
import Image from "next/image";

const Footer = ({ footer }) => {
  const t = useTranslations('Messages');
  return <footer className="main-footer pt-80">

    <div className="footer-bottom mt-30 pt-25 pb-10">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="copyright-text text-center text-lg-start">
              <p>© Copyright {new Date().getFullYear()} Take & Go. {t("footer_copyright")}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer-bottom-menu mb-10 text-center text-lg-end">
              <ul>
                <li>
                <Image id="logotext" className="profile-img" src={logotext} alt="..." />
                </li>
                
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

