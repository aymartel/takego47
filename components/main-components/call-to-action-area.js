import { useTranslations } from "next-intl";
import Link from "next/link";

const CallToActionArea = () => {
  const t = useTranslations('Messages');
  return (
    <section className="call-to-action-area rel z-2">
        <div className="container">
          <div
            className="cta-inner bgs-cover bgCta2"
          >
            <div className="row">
              <div className="col-xl-6">
                <div className="cta-item wow fadeInLeft delay-0-1s">
                  <div className="icon">
                    <i className="flaticon-idea" />
                  </div>
                  <h4>{t("calltoactionarea_text1")}</h4>
                  <Link href="#contact">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="cta-item wow fadeInRight delay-0-1s">
                  <div className="icon">
                    <i className="flaticon-startup" />
                  </div>
                  <h4>{t("calltoactionarea_text2")}</h4>
                  <Link href="#contact">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
export default CallToActionArea;
