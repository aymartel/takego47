import Link from "next/link";
import Image from "next/image";
import location1 from "@/images/contact/location1.png";
import location2 from "@/images/contact/location2.png";
import location3 from "@/images/contact/location3.png";
const OurLocationAddressArea = () => {
  return (
    <section className="our-location-address-area rel z-1">
        <div className="container">
          <div className="row medium-gap justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="location-address-item wow fadeInUp delay-0-1s">
                <div className="top-part">
                  <Image  
                    src={location1}
                    alt="Location"
                  />
                  <h5>New York</h5>
                </div>
                <div className="bottom-part">
                  <ul>
                    <li>
                      <i className="fal fa-map-marker-alt" /> 55 Main Street,
                      New York
                    </li>
                    <li>
                      <i className="far fa-envelope-open-text" />{" "}
                      support@gmail.com
                    </li>
                    <li>
                      <i className="far fa-phone" /> +000 (123) 456 88
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-address-item wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <Image  
                    src={location2}
                    alt="Location"
                  />
                  <h5>Australia Capital</h5>
                </div>
                <div className="bottom-part">
                  <ul>
                    <li>
                      <i className="fal fa-map-marker-alt" /> 55 Main Street,
                      New York
                    </li>
                    <li>
                      <i className="far fa-envelope-open-text" />{" "}
                      support@gmail.com
                    </li>
                    <li>
                      <i className="far fa-phone" /> +000 (123) 456 88
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-address-item wow fadeInUp delay-0-6s">
                <div className="top-part">
                  <Image  
                    src={location3}
                    alt="Location"
                  />
                  <h5>South Africa</h5>
                </div>
                <div className="bottom-part">
                  <ul>
                    <li>
                      <i className="fal fa-map-marker-alt" /> 55 Main Street,
                      New York
                    </li>
                    <li>
                      <i className="far fa-envelope-open-text" />{" "}
                      support@gmail.com
                    </li>
                    <li>
                      <i className="far fa-phone" /> +000 (123) 456 88
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
export default OurLocationAddressArea;
