import Link from "next/link";
import heroThree from "@/images/hero/hero-three.svg";
import heroShape1 from "@/images/shapes/hero-shape1.png";
import heroShape2 from "@/images/shapes/hero-shape2.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { linesToParagraphs } from "utils/utils";

const Hero = () => {
  const t = useTranslations('Messages');
  return (
    <section className="hero-area bgc-dark-blue rel z-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 align-self-center">
            <div className="hero-content text-white my-120 rmb-0 wow fadeInLeft delay-0-2s">
            {t("company")} 
            </div>
          </div>
          <div className="col-lg-5 align-self-end">
            <div className="hero-images mt-75 wow fadeInRight delay-0-2s">
              <img src="assets/images/hero/hero-two.png" alt="Hero" />
            </div>
          </div>
        </div>
      </div>
      <div className="wave-shapes">
        <Image
          className="shape-one"
          src={heroShape1}
          alt="Shape"
        />
        <Image
          className="shape-two"
          src={heroShape2}
          alt="Shape"
        />
      </div>
    </section>



  );
};
export default Hero;
