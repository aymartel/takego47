import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import member1 from "@/images/team/member1.jpg"
import member2 from "@/images/team/member2.jpg"
import member3 from "@/images/team/member3.jpg"
import member4 from "@/images/team/member4.jpg"
import member5 from "@/images/team/member5.jpg"
import member6 from "@/images/team/member6.jpg"
import member7 from "@/images/team/member7.jpg"
import member8 from "@/images/team/member8.jpg"
import member9 from "@/images/team/member9.jpg"
import member10 from "@/images/team/member10.jpg"
import member11 from "@/images/team/member11.jpg"
import member12 from "@/images/team/member12.jpg"
const TeamIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".team-active", {
        itemSelector: ".item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");
  return (
    <Fragment>
      <ul className="team-filter filter-btns-two justify-content-center mb-30 wow fadeInUp delay-0-4s">
        <li
          data-filter="*"
          className={`c-pointer ${activeBtn("*")}`}
          onClick={handleFilterKeyChange("*")}
        >
          Show All
        </li>
        <li
          className={`c-pointer ${activeBtn("desiger")}`}
          onClick={handleFilterKeyChange("desiger")}
          data-filter=".desiger"
        >
          Desiger
        </li>
        <li
          className={`c-pointer ${activeBtn("developer")}`}
          onClick={handleFilterKeyChange("developer")}
          data-filter=".developer"
        >
          Developer
        </li>
        <li
          className={`c-pointer ${activeBtn("engineer")}`}
          onClick={handleFilterKeyChange("engineer")}
          data-filter=".engineer"
        >
          Engineer
        </li>
        <li
          className={`c-pointer ${activeBtn("seo-expert")}`}
          onClick={handleFilterKeyChange("seo-expert")}
          data-filter=".seo-expert"
        >
          SEO Expert
        </li>
        <li
          className={`c-pointer ${activeBtn("logo-designer")}`}
          onClick={handleFilterKeyChange("logo-designer")}
          data-filter=".logo-designer"
        >
          Logo Designer
        </li>
      </ul>
      <div className="row team-active justify-content-center">
        <div className="col-xl-3 col-lg-4 col-md-6 item developer seo-expert">
          <div className="team-member">
            <div className="image">
              <Image   src={member1} alt="Member" />
            </div>
            <div className="content">
              <h5>
                <Link href="#team-profile">Richard C. Harrison</Link>
              </h5>
              <span className="designation">Senior Manager</span>
              <div className="social-style-one">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 item desiger logo-designer">
          <div className="team-member">
            <div className="image">
              <Image   src={member2} alt="Member" />
            </div>
            <div className="content">
              <h5>
                <Link href="#team-profile">Richard C. Harrison</Link>
              </h5>
              <span className="designation">Web Developer</span>
              <div className="social-style-one">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 item engineer seo-expert">
          <div className="team-member">
            <div className="image">
              <Image   src={member3} alt="Member" />
            </div>
            <div className="content">
              <h5>
                <Link href="#team-profile">Michael D. Jackson</Link>
              </h5>
              <span className="designation">Business Developer</span>
              <div className="social-style-one">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 item desiger logo-designer">
          <div className="team-member">
            <div className="image">
              <Image   src={member4} alt="Member" />
            </div>
            <div className="content">
              <h5>
                <Link href="#team-profile">Damian S. Madison</Link>
              </h5>
              <span className="designation">Product Designer</span>
              <div className="social-style-one">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 item developer engineer">
          <div className="team-member">
            <div className="image">
              <Image   src={member5} alt="Member" />
            </div>
            <div className="content">
              <h5>
                <Link href="#team-profile">Michael F. Stanton</Link>
              </h5>
              <span className="designation">Business Consultant</span>
              <div className="social-style-one">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 item engineer seo-expert">
          <div className="team-member">
            <div className="image">
              <Image   src={member6} alt="Member" />
            </div>
            <div className="content">
              <h5>
                <Link href="#team-profile">Adam C. Holbrook</Link>
              </h5>
              <span className="designation">Junior Product Manager</span>
              <div className="social-style-one">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 item desiger seo-expert">
          <div className="team-member">
            <div className="image">
              <Image   src={member7} alt="Member" />
            </div>
            <div className="content">
              <h5>
                <Link href="#team-profile">Melvin C. Olsen</Link>
              </h5>
              <span className="designation">Graphics Designer</span>
              <div className="social-style-one">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 item developer engineer logo-designer">
          <div className="team-member">
            <div className="image">
              <Image   src={member8} alt="Member" />
            </div>
            <div className="content">
              <h5>
                <Link href="#team-profile">Steven F. Spicer</Link>
              </h5>
              <span className="designation">Logo Designer</span>
              <div className="social-style-one">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 item desiger seo-expert">
          <div className="team-member">
            <div className="image">
              <Image   src={member9} alt="Member" />
            </div>
            <div className="content">
              <h5>
                <Link href="#team-profile">Henry G. Hyman</Link>
              </h5>
              <span className="designation">Support Engineer</span>
              <div className="social-style-one">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 item developer logo-designer">
          <div className="team-member">
            <div className="image">
              <Image   src={member10} alt="Member" />
            </div>
            <div className="content">
              <h5>
                <Link href="#team-profile">Charles V. Davenport</Link>
              </h5>
              <span className="designation">Web Developer</span>
              <div className="social-style-one">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 item desiger engineer">
          <div className="team-member">
            <div className="image">
              <Image   src={member11} alt="Member" />
            </div>
            <div className="content">
              <h5>
                <Link href="#team-profile">Brian V. Jackman</Link>
              </h5>
              <span className="designation">SEO Experts</span>
              <div className="social-style-one">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 item developer seo-expert logo-designer">
          <div className="team-member">
            <div className="image">
              <Image   src={member12} alt="Member" />
            </div>
            <div className="content">
              <h5>
                <Link href="#team-profile">Steven M. Colon</Link>
              </h5>
              <span className="designation">Software Engineer</span>
              <div className="social-style-one">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default TeamIsotope;
