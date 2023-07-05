import Link from "next/link";
import Image from "next/image";
import cta from "@/images/about/cta.png";
import { useTranslations } from "next-intl";
const CtaTwo = () => {
  const t = useTranslations('Messages');
  return (
    <section
        className="cta-two bgc-primary bgs-cover text-white py-75 rel z-1"
      >
        <div className="container">
          <div className="row large-gap align-items-center">
            <div className="col-lg-5">
              <div className="cta-two-image rmb-65 wow fadeInRight delay-0-1s">
                <Image   src={cta} alt="CTA" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cta-two-content-two wow fadeInLeft delay-0-1s">
                <div className="section-title mb-25">
                  <h2>{t("ctatwo_title")}</h2>
                </div>
                <p>
                  {t("ctatwo_text")}
                </p>
                <Link href="#contact">
                  <a className="theme-btn style-three white-btn mt-15">
                  {t("ctatwo_btn")}{" "}
                    <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
export default CtaTwo;
