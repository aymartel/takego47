import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { teamSliderActive } from "../layout/sliderProps";
import member1 from "@/images/team/member1.jpg";
import member2 from "@/images/team/member2.jpg";
import member3 from "@/images/team/member3.jpg";
import member4 from "@/images/team/member4.jpg";
import { useTranslations } from "next-intl";

const TeamSliderArea = () => {
  const t = useTranslations('Messages');
  return (
    <section className="team-slider-area pt-210 pb-130 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50">
                <span className="sub-title style-two mb-15">{t("teamsliderarea_title")}</span>
                <h2>{t("teamsliderarea_subtitle")}</h2>
              </div>
            </div>
          </div>
          <Slider {...teamSliderActive} className="team-slider-active">
            <div className="team-member wow fadeInUp delay-0-1s">
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
            <div className="team-member wow fadeInUp delay-0-4s">
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
            <div className="team-member wow fadeInUp delay-0-6s">
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
            <div className="team-member wow fadeInUp delay-0-8s">
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
            <div className="team-member wow fadeInUp delay-0-1s">
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
            <div className="team-member wow fadeInUp delay-0-4s">
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
            <div className="team-member wow fadeInUp delay-0-6s">
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
            <div className="team-member wow fadeInUp delay-0-8s">
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
          </Slider>
        </div>
      </section>
  );
};
export default TeamSliderArea;
