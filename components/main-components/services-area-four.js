import Link from "next/link";
import serviceFour1 from "@/images/services/service-four1.png";
import serviceFour2 from "@/images/services/service-four2.png";
import serviceFour3 from "@/images/services/service-four3.png";
import serviceFour4 from "@/images/services/service-four4.png";
import serviceFour5 from "@/images/services/service-four5.png";
import serviceFour6 from "@/images/services/service-four6.png";
import Image from "next/image";
const ServicesAreaFour = () => {
  return (
    <section className="services-area-four bgc-black pt-130 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center text-white mb-60 wow fadeInUp delay-0-1s">
                <span className="sub-title style-two mb-20">
                  Services We Provide
                </span>
                <h2>Popular Web Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="service-item-four wow fadeInUp delay-0-1s">
                
                  <Image  
                    src={serviceFour1}
                    alt="Service"
                  />
               
                <h5>Website Creation from Figma, XD or Photoshop</h5>
                <Link href="#service-details">
                  <a className="theme-btn style-three">
                    Service Details <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-item-four wow fadeInUp delay-0-4s">
               
                  <Image  
                    src={serviceFour2}
                    alt="Service"
                  />
                
                <h5>Mobile App Development and Website Design</h5>
                <Link href="#service-details">
                  <a className="theme-btn style-three">
                    Service Details <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-item-four wow fadeInUp delay-0-6s">
               
                  <Image  
                    src={serviceFour3}
                    alt="Service"
                  />
                <h5>eCommerce and Product Selling Development</h5>
                <Link href="#service-details">
                  <a className="theme-btn style-three">
                    Service Details <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-item-four wow fadeInUp delay-0-1s">
             
                  <Image  
                    src={serviceFour4}
                    alt="Service"
                  />
                <h5>Responsive Websites (UI/UX) Design</h5>
                <Link href="#service-details">
                  <a className="theme-btn style-three">
                    Service Details <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-item-four wow fadeInUp delay-0-4s">
                
                  <Image  
                    src={serviceFour5}
                    alt="Service"
                  />
                <h5>SEO (Search Engine Optimization)</h5>
                <Link href="#service-details">
                  <a className="theme-btn style-three">
                    Service Details <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-item-four wow fadeInUp delay-0-6s">
               
                  <Image  
                    src={serviceFour6}
                    alt="Service"
                  />
                <h5>Digital Product Design and Development</h5>
                <Link href="#service-details">
                  <a className="theme-btn style-three">
                    Service Details <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
export default ServicesAreaFour;
