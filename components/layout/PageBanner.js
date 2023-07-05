import Link from "next/link";
import Image from "next/image";
import heroShape1 from "@/images/shapes/hero-shape1.png";
import heroShape2 from "@/images/shapes/hero-shape2.png";

const PageBanner = ({ titleHtml, titleText }) => {
  return (
    <section className="page-banner-area pt-245 rpt-150 pb-170 rpb-100 rel z-1 bgc-lighter text-center">
      <div className="container">
        <div className="banner-inner rpt-10">
          <h1
            className="page-title wow fadeInUp delay-0-1s"
            dangerouslySetInnerHTML={{ __html: titleHtml }}
          ></h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
              <li className="breadcrumb-item">
                <Link href="#">
                  <a>home</a>
                </Link>
              </li>
              <li className="breadcrumb-item active">{titleText}</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="banner-shapes">
        <div
          className="circle wow zoomInLeft delay-0-1s"
          data-wow-duration="2s"
        />
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
export default PageBanner;
