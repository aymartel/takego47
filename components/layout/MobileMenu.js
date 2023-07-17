import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Image from "next/image";
import ChangeLanguaje from "../secondaries-components/change-languaje";
import logoen from "@/images/logos/logo.svg";
import logoru from "@/images/logos/logo.svg";

const MobileMenu = ({ logo }) => {
  const t = useTranslations('Messages');
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
    setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
    setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu navbar-expand-lg d-block d-lg-none mobile-header">
      <Accordion>
        <div className="navbar-header">
          <div className="mobile-logo my-15">
            <Link href="#">
              <a>
                <Image
                  src={router.locale !== 'ru' ? logoen : logoru}

                  alt="Logo"
                  title="Logo"
                  width={250}
                  height={66}
                />
              </a>
            </Link>
            
          </div>
          {/* Toggle Button */}
          <div className=" 	d-md-none d-lg-block 	d-lg-none d-xl-block 	d-xl-none">

            <ChangeLanguaje />
          </div>
          <Accordion.Toggle
            eventKey="nav"
            as="button"
            className="navbar-toggle"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey="nav" className="navbar-collapse clearfix">
          <ul className="navigation clearfix">
            
            <li>
              <Link href="#about_us">{t("about_us")}</Link>
            </li>
            <li>
              <Link href="#services">{t("take_service")}</Link>
            </li>
            <li>
              <Link href="#payment">{t("take_payment")}</Link>
            </li>
          
          </ul>
        </Accordion.Collapse>
      </Accordion>
      
    </nav>
  );
};
export default MobileMenu;
