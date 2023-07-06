import Link from "next/link";
import Image from "next/image";
import whatWeOffer from "@/images/about/about.svg";
import { useTranslations } from "next-intl";

const WhatWeOfferThree = () => {
  const t = useTranslations('Messages');
  return (
    <section className="what-we-offer-two mb-130 rel z-1" >
    <div className="container">
      <div className="row large-gap align-items-center">
        <div className="col-lg-6">
          <div className="what-we-offer-image rmb-65 wow fadeInRight delay-0-1s">
            <Image  
              src={whatWeOffer}
              alt="What We Offer"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="what-we-offer-content wow fadeInLeft delay-0-1s">
            <div className="section-title mb-25">
              
              <h2>{t("whatweoffertwo_subtitle")}</h2>
            </div>
            <p>
            {t("whatweoffertwo_text")}
            </p>
            <ul className="list-style-four pt-5 pb-30">
              <li>{t("whatweoffertwo_list1")}</li>
              <li>{t("whatweoffertwo_list2")}</li>
              <li>{t("whatweoffertwo_list3")}</li>
              <li>{t("whatweoffertwo_list4")}</li>
            </ul>
            <Link href="#about_us">
              <a className="theme-btn mt-15">
                Learn More <i className="fas fa-angle-double-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
export default WhatWeOfferThree;
