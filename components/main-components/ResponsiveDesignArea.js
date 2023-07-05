import Link from "next/link";
import Image from "next/image";
import statisticsFive from "@/images/about/statistics-five.png";
import { useTranslations } from "next-intl";
const ResponsiveDesignArea = () => {
  const t = useTranslations('Messages');
  return (
    <section className="responsive-design-area mb-130 rel z-1">
      <div className="container">
        <div className="row large-gap align-items-center">
          <div className="col-lg-6">
            <div className="responsive-design-content rmb-65 wow fadeInLeft delay-0-1s">
              <div className="section-title mb-25">
                <span className="sub-title style-two mb-15">
                {t("responsivedesignarea_title")}
                </span>
                <h2>{t("responsivedesignarea_subtitle")}</h2>
              </div>
              <p>
              {t("responsivedesignarea_text")}
              </p>
              <ul className="list-style-four pt-5 pb-30">
                <li>{t("responsivedesignarea_list1")}</li>
                <li>{t("responsivedesignarea_list2")}</li>
                <li>{t("responsivedesignarea_list3")}</li>
              </ul>
              <Link href="#about_us">
                <a className="theme-btn style-two mt-15">
                {t("learnmore")} <i className="fas fa-angle-double-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="responsive-design-image wow fadeInRight delay-0-1s">
              <Image  
                src={statisticsFive}
                alt="Responsive Design"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ResponsiveDesignArea;
