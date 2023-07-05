import Link from "next/link";
import Image from "next/image";

const ServiceItemFive = ({icon,title,text,delay, btnText}) => {
  return (
    <div className={`service-item-five wow fadeInUp delay-0-${delay}s`}>
      <div className="icon">
        <Image src={icon} alt="Icon" />
      </div>
      <h4>{title}</h4>
      <p>
        {text}
      </p>
      <Link href="#service-details">
        <a className="theme-btn style-three">
        {btnText} <i className="fas fa-angle-double-right" />
        </a>
      </Link>
    </div>
  );
};
export default ServiceItemFive;
