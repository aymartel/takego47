import Link from "next/link";
import { Image, Nav, Tab } from "react-bootstrap";
import pricingBgWave1 from "@/images/shapes/pricing-bg-wave1.png";

const PricingAreaThree = () => {
  return (
    <section className="pricing-area-three pt-130 pb-165 rel z-1">
    <div className="container">
      <Tab.Container defaultActiveKey={"monthly"}>
        <div className="row">
          <div className="col-xl-4 col-lg-10">
            <div className="pricing-plan-content mb-65 wow fadeInUp delay-0-1s">
              <div className="section-title mb-30">
                <span className="sub-title style-two mb-20">
                  Pricing Plan
                </span>
                <h2>Choose Your Best Pricing Plan</h2>
              </div>
              <p>
                Start building your first prototype in no time. Ogency
                intuitive drag &amp; drop interface gives you all the
                building blocks that you need to get started! No skills
                required.
              </p>
              <Nav className="nav pricing-tab mt-15" role="tablist">
                <li>
                  <Nav.Link
                    eventKey={"monthly"}
                    as="button"
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#monthly"
                  >
                    Monthly
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    eventKey={"yearly"}
                    as="button"
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#yearly"
                  >
                    Yearly
                  </Nav.Link>
                </li>
              </Nav>
            </div>
          </div>
          <div className="col-xl-8">
            <Tab.Content className="tab-content wow fadeInUp delay-0-4s">
              <Tab.Pane className="tab-pane fade" eventKey="monthly">
                <div className="row">
                  <div className="col-md-6">
                    <div className="pricing-plan-three">
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
                  <div className="col-md-6">
                    <div className="pricing-plan-three">
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
                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade yearly" eventKey="yearly">
                <div className="row">
                  <div className="col-md-6">
                    <div className="pricing-plan-three">
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
                          <span className="price">480</span>
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
                  <div className="col-md-6">
                    <div className="pricing-plan-three">
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
                          <span className="price">848</span>
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
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </div>
    <div className="wave-shapes">
      <Image  
        className="shape one"
        src={pricingBgWave1}
        alt="Wave Shape"
      />
    </div>
  </section>
  );
};
export default PricingAreaThree;
