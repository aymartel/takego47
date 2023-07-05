import Link from "next/link";
import { Image, Nav, Tab } from "react-bootstrap";
import pricingBgWave3 from "@/images/shapes/pricing-bg-wave3.png";
import PricingPlanThreeItem from "../secondaries-components/pricing-plan-threeItem";

const PricingAreaFive = () => {
  return (
    <section className="pricing-area-five pt-65 pb-100 rel z-1">
      <div className="container">
        <Tab.Container defaultActiveKey={"design"}>
          <div className="row align-items-end justify-content-between pb-25">
            <div className="col-xl-5 col-lg-7">
              <div className="section-title mb-35 wow fadeInUp delay-0-1s">
                <span className="sub-title style-two mb-20">
                  Pricing Plan
                </span>
                <h2>Choose Your Perfect Pricing Package</h2>
              </div>
            </div>
            <div className="col-lg-5 text-lg-end">
            <Nav
                className="nav pricing-tab mb-35 wow fadeInUp delay-0-1s m-5"
                role="tablist"
              >
                
                <li>
                  <Nav.Link
                    eventKey={"design"}
                    as="button"
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#monthlyThree"
                  >
                    Design
                  </Nav.Link>
                </li>
              </Nav>
              
              <Nav
                className="nav pricing-tab mb-35 wow fadeInUp delay-0-1s"
                role="tablist"
              >
                
              
                <li>
                  <Nav.Link
                    eventKey={"web"}
                    as="button"
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#yearlyThree"
                  >
                    Web
                  </Nav.Link>
                </li>
            
              </Nav>
            
              <Nav
                className="nav pricing-tab mb-35 wow fadeInUp delay-0-1s m-5"
                role="tablist"
              >
                
             
                <li>
                  <Nav.Link
                    eventKey={"social"}
                    as="button"
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#yearlyThree"
                  >
                    Social
                  </Nav.Link>
                </li>
              </Nav>

              
            </div>
          </div>
          <Tab.Content className="tab-content wow fadeInUp delay-0-4s">
            <Tab.Pane className="tab-pane fade" eventKey="design">
              <div className="row justify-content-center">
                <PricingPlanThreeItem
                  list={
                    [" HTML+CSS design",
                      "Social Media Marketing",
                      "Domin hosting provider",
                      "Online support (24/7)",
                      "WordPres development"]
                  }
                  name="Desing Plan"
                  price={235}
                  tipePrice={"Monthly"}
                  popular="Popular"
                  save="save"
                  percentSave={25}
                  textbtn="chose"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane className="tab-pane fade yearly" eventKey="web">
              <div className="row justify-content-center">
                <PricingPlanThreeItem
                  list={
                    [" HTML+CSS design",
                      "Social Media Marketing",
                      "Domin hosting provider",
                      "Online support (24/7)",
                      "WordPres development"]
                  }
                  name="Web Plan"
                  price={500}
                  tipePrice={"Monthly"}
                  popular="Popular"
                  save="save"
                  percentSave={100}
                  textbtn="chose"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane className="tab-pane fade yearly" eventKey="social">
              <div className="row justify-content-center">
                <PricingPlanThreeItem
                  list={
                    [" HTML+CSS design",
                      "Social Media Marketing",
                      "Domin hosting provider",
                      "Online support (24/7)",
                      "WordPres development"]
                  }
                  name="Social Plan"
                  price={100}
                  tipePrice={"Monthly"}
                  popular="Popular"
                  save="save"
                  percentSave={300}
                  textbtn="chose"
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>

    </section>
  );
};
export default PricingAreaFive;
