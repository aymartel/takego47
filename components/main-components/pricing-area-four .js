import { Image, Nav, Tab } from "react-bootstrap";
import Link from "next/link";
import pricingBgWave2 from "@/images/shapes/pricing-bg-wave2.png";

const PricingAreaFour  = () => {
  return (
    <section className="pricing-area-four pt-65 pb-165 rel z-1">
    <div className="container">
      <Tab.Container defaultActiveKey={"monthlyTwo"}>
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-7">
            <div className="pricing-plan-content text-center mb-65 wow fadeInUp delay-0-1s">
              <div className="section-title text-center mb-30">
                <span className="sub-title style-two mb-20">
                  Pricing Plan
                </span>
                <h2>Choose Your Perfect Pricing Package</h2>
              </div>
              <Nav className="nav pricing-tab mt-15" role="tablist">
                <li>
                  <Nav.Link
                    eventKey={"monthlyTwo"}
                    as="button"
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#monthlyTwo"
                  >
                    Monthly
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    eventKey={"yearlyTwo"}
                    as="button"
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#yearlyTwo"
                  >
                    Yearly
                  </Nav.Link>
                </li>
              </Nav>
            </div>
          </div>
        </div>
        <Tab.Content className="tab-content wow fadeInUp delay-0-4s">
          <Tab.Pane className="tab-pane fade" eventKey="monthlyTwo">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-md-6">
                <div className="pricing-plan-three style-two">
                  <span className="badge">popular</span>
                  <h4>Basic Plan</h4>
                  <ul className="list-style-two">
                    <li>Landing page design (10 pages)</li>
                    <li>HTML+CSS design (12 pages)</li>
                    <li>Social Media Marketing</li>
                    <li>Domin hosting provider</li>
                    <li>Online support (24/7)</li>
                    <li>WordPres development</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">248</span>
                      <span className="save">
                        Save<span> 25%</span>
                      </span>
                      <Link href="#contact">
                        <a className="theme-btn style-three">
                          Choose Package{" "}
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="pricing-plan-three style-two">
                  <span className="badge">popular</span>
                  <h4>Ultra Plan</h4>
                  <ul className="list-style-two">
                    <li>Landing page design (10 pages)</li>
                    <li>HTML+CSS design (12 pages)</li>
                    <li>Social Media Marketing</li>
                    <li>Domin hosting provider</li>
                    <li>Online support (24/7)</li>
                    <li>WordPres development</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">548</span>
                      <span className="save">
                        Save<span> 25%</span>
                      </span>
                      <Link href="#contact">
                        <a className="theme-btn style-three">
                          Choose Package{" "}
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="pricing-plan-three style-two">
                  <span className="badge">popular</span>
                  <h4>Gold Plan</h4>
                  <ul className="list-style-two">
                    <li>Landing page design (10 pages)</li>
                    <li>HTML+CSS design (12 pages)</li>
                    <li>Social Media Marketing</li>
                    <li>Domin hosting provider</li>
                    <li>Online support (24/7)</li>
                    <li>WordPres development</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">948</span>
                      <span className="save">
                        Save<span> 43%</span>
                      </span>
                      <Link href="#contact">
                        <a className="theme-btn style-three">
                          Choose Package{" "}
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane className="tab-pane fade yearly" eventKey="yearlyTwo">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-md-6">
                <div className="pricing-plan-three style-two">
                  <span className="badge">popular</span>
                  <h4>Basic Plan</h4>
                  <ul className="list-style-two">
                    <li>Landing page design (10 pages)</li>
                    <li>HTML+CSS design (12 pages)</li>
                    <li>Social Media Marketing</li>
                    <li>Domin hosting provider</li>
                    <li>Online support (24/7)</li>
                    <li>WordPres development</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">382</span>
                      <span className="save">
                        Save<span> 25%</span>
                      </span>
                      <Link href="#contact">
                        <a className="theme-btn style-three">
                          Choose Package{" "}
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="pricing-plan-three style-two">
                  <span className="badge">popular</span>
                  <h4>Ultra Plan</h4>
                  <ul className="list-style-two">
                    <li>Landing page design (10 pages)</li>
                    <li>HTML+CSS design (12 pages)</li>
                    <li>Social Media Marketing</li>
                    <li>Domin hosting provider</li>
                    <li>Online support (24/7)</li>
                    <li>WordPres development</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">805</span>
                      <span className="save">
                        Save<span> 25%</span>
                      </span>
                      <Link href="#contact">
                        <a className="theme-btn style-three">
                          Choose Package{" "}
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="pricing-plan-three style-two">
                  <span className="badge">popular</span>
                  <h4>Gold Plan</h4>
                  <ul className="list-style-two">
                    <li>Landing page design (10 pages)</li>
                    <li>HTML+CSS design (12 pages)</li>
                    <li>Social Media Marketing</li>
                    <li>Domin hosting provider</li>
                    <li>Online support (24/7)</li>
                    <li>WordPres development</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">1248</span>
                      <span className="save">
                        Save<span> 43%</span>
                      </span>
                      <Link href="#contact">
                        <a className="theme-btn style-three">
                          Choose Package{" "}
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
    <div className="wave-shapes">
      <Image  
        className="shape one"
        src={pricingBgWave2}
        alt="Wave Shape"
      />
    </div>
  </section>
  );
};
export default PricingAreaFour ;
