import Link from "next/link";
import Image from "next/image";
import statisticsfive from "@/images/about/statistics-five.png";
import { useTranslations } from "next-intl";
const StatisticsAreaFive = () => {
  const t = useTranslations('Messages');
  return (
    <section className="statistics-area-five py-130">
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6">
          <div className="statistics-five-content mb-30 rmb-65 wow fadeInRight delay-0-1s">
            <div className="section-title mb-25">
              <span className="sub-title style-two mb-15">
                {t("statisticsareafive_title")}
              </span>
              <h2>
              {t("statisticsareafive_subtitle")}
              </h2>
            </div>
            <p>
            {t("statisticsareafive_text")}
            </p>
            <Link href="#about_us">
              <a className="theme-btn mt-15">
              {t("learnmore")} <i className="fas fa-angle-double-right" />
              </a>
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="statistics-five-image wow fadeInLeft delay-0-1s">
            <Image  
              src={statisticsfive}
              alt="Statistics"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
export default StatisticsAreaFive;
