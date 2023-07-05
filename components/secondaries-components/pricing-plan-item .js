import Link from "next/link";
import Image from "next/image";

const PricingPlanItem = ({planTitle,planItems,planprice,savepercent}) => {
  return (
    <div className="pricing-plan-item wow fadeInUp delay-0-1s">
      <div className="price-features">
        <h4>{planTitle}</h4>
        <ul className="list-style-two">
          {planItems.map((data, index) => (
            <li key={`li-${index}`}>{data}</li>
          ))}
        </ul>
        <span className="badge">popular</span>
      </div>
      <div className="price-and-btn">
        <div className="content">
          <span className="price">{planprice}</span>
          <span className="save">
            Save<span> {savepercent}%</span>
          </span>
          <Link href="#contact">
            <a className="theme-btn style-three colorBTNprice">
              Choose Package <i className="fas fa-angle-double-right" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PricingPlanItem;
