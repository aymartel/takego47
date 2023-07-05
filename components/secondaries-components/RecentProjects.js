import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import projectThree1 from "@/images/projects/project-three1.jpg";
import projectThree2 from "@/images/projects/project-three2.jpg";
import projectThree3 from "@/images/projects/project-three3.jpg";
import { projectThreeActive } from "../layout/sliderProps";
import { useTranslations } from "next-intl";

const RecentProjects = () => {
  const t = useTranslations('Messages');
  return (
    <section className="project-area-three py-130 rel z-1" id="project">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg10">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-1s">
              <span className="sub-title mb-15">{t("projectareathree_title")}</span>
              <h2>{t("projectareathree_subtitle")}</h2>
            </div>
          </div>
        </div>
      </div>
      <Slider {...projectThreeActive} className="project-three-active">
        <div className="project-item style-two wow fadeInUp delay-0-1s">
          <div className="project-iamge">
            <Image  
              src={projectThree1}
              alt="Project"
            />
            <div className="project-over">
              <Link href="#project-details">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-content">
            <h4>
              <Link href="#project-details">Creative Website design</Link>
            </h4>
            <span className="category">Design Responsive</span>
          </div>
        </div>
        <div className="project-item style-two wow fadeInUp delay-0-4s">
          <div className="project-iamge">
            <Image  
              src={projectThree2}
              alt="Project"
            />
            <div className="project-over">
              <Link href="#project-details">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-content">
            <h4>
              <Link href="#project-details">Software Landing Pages</Link>
            </h4>
            <span className="category">Design Responsive</span>
          </div>
        </div>
        <div className="project-item style-two wow fadeInUp delay-0-6s">
          <div className="project-iamge">
            <Image  
              src={projectThree3}
              alt="Project"
            />
            <div className="project-over">
              <Link href="#project-details">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-content">
            <h4>
              <Link href="#project-details">Mobile Application Design</Link>
            </h4>
            <span className="category">Design Responsive</span>
          </div>
        </div>
        <div className="project-item style-two wow fadeInUp delay-0-8s">
          <div className="project-iamge">
            <Image  
              src={projectThree2}
              alt="Project"
            />
            <div className="project-over">
              <Link href="#project-details">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-content">
            <h4>
              <Link href="#project-details">Software Landing Pages</Link>
            </h4>
            <span className="category">Design Responsive</span>
          </div>
        </div>
      </Slider>
    </section>
  );
};
export default RecentProjects;
