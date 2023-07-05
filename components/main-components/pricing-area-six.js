
import { useTranslations } from "next-intl";
import Link from "next/link";
import PricingAreaFive from "./pricing-area-five";

const PricingAreaSix = () => {
  const t = useTranslations('Messages');
  return (
    <section className="pricing-area-two bgc-lighter pt-240 pb-100 rel z-1">
        <PricingAreaFive/>
        <div className="pricing-shapes">
          <img
            className="shape dots"
            src="images/shapes/pricing-bg-dots.png"
            alt="Shape"
          />
          <img
            className="shape wave"
            src="images/shapes/pricing-wave-line.png"
            alt="Shape"
          />
          
        </div>
      </section>
  );
};
export default PricingAreaSix;
