
import Link from "next/link";
import { sideBarToggle, t } from "../../utils/utils";
import MobileMenu from "./MobileMenu";
import ChangeLanguajeText from "../secondaries-components/change-languaje-text";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import logo from "../../assets/images/take/logotext.svg";
import Image from "next/image";
import ChangeLanguaje from "../secondaries-components/change-languaje";
import logotext from "@/images/take/logotext.svg";

const Header = ({ header }) => {
  
  
  return <Header1 />;
  
  
};
export default Header;


const Header1 = () => {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg  fixed-top py-3">
            <div className="container px-5">
                <a className="nav-link" href="#home"> <Image id="logotext" className="profile-img" src={logotext} alt="..." /></a>
               
                <button id="btnclick" className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"><span
                        className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder ">
                        <li className="nav-item"><a id="nav-link1" className="nav-link" href="#mission">{t("about_us")}</a></li>
                        <li className="nav-item"><a id="nav-link2" className="nav-link" href="#service">{t("take_service")}</a></li>
                        <li className="nav-item"><a id="nav-link3" className="nav-link" href="#payment">{t("take_payment")}</a></li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="navbaelanguaje">
                
                <Link href="">
                <a id="btn-quote"className="theme-btn style-three bg-white" onClick={() => sideBarToggle()}>
                  {t("get_quote")}<i className="fas fa-angle-double-right" />
                </a>
              </Link>
              <div className="menu-sidebar  fs-3 	d-block d-sm-block d-xl-none">
                <button onClick={() => sideBarToggle()}>
                  <i className="fas fa-headset icon-callcenter  color-icon" />
                </button>
              </div>
                </div>
            </div>
        </nav>

   
  );
};


