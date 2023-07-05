
import Link from "next/link";
import { sideBarToggle, t } from "../../utils/utils";
import MobileMenu from "./MobileMenu";
import ChangeLanguajeText from "../secondaries-components/change-languaje-text";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import logo from "../../assets/images/logos/logo1.svg";
import Image from "next/image";
import ChangeLanguaje from "../secondaries-components/change-languaje";


const Header = ({ header }) => {
  
  
  return <Header1 />;
  
  
};
export default Header;


const Header1 = () => {
  const router = useRouter();
  return (
    <header className="main-header header-two backHeader">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="#">
                  <a>
                    <Image
                      src={logo}
                      alt="Logo"
                      title="Logo"
                      width={250}
                      height={60}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              <MobileMenu logo={logo} />
              {/* Main Menu */}
              <nav className="main-menu d-none d-lg-block navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo my-15">
                    <Link href="#">
                      <a>
                        <Image
                          src={logo}
                          alt="Logo"
                          title="Logo"
                          width={250}
                          height={66}
                        />
                      </a>
                    </Link>
                  </div>
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div className="navbar-collapse collapse clearfix">
                  <Menu />
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>
          
            {/* Menu Button */}
            <div className="menu-btns">
              <div className="d-none d-sm-none d-md-block">

                <ChangeLanguaje />
              </div>
              <Link href="">
                <a className="theme-btn style-three" onClick={() => sideBarToggle()}>
                  {t("get_quote")}<i className="fas fa-angle-double-right" />
                </a>
              </Link>
              {/* menu sidbar */}
              <div className="menu-sidebar  fs-3 	d-block d-sm-block d-xl-none">
                <button onClick={() => sideBarToggle()}>
                  <i className="fas fa-headset icon-callcenter  color-icon" />
                </button>
              </div>
              {/* <div className="menu-sidebar d-none d-lg-block">
                <button onClick={() => sideBarToggle()}>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};


const Menu = () => {
  return (
    <ul className="navigation clearfix">
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
  );
};
