import Link from "next/link";
import Image from "next/image";
import ProgressBar from "../secondaries-components/ProgressBar";
import bestSkills from "@/images/about/best-skills.jpg";

const SupportMarketingAreaImage = () => {
  return (
    <section className="support-marketing-area py-130 rel z-1">
        <div className="container">
          <div className="row large-gap justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="support-marketing-progress rmb-65 wow fadeInLeft delay-0-1s">
                <div className="section-title mb-35">
                  <span className="sub-title style-two mb-15">Best Skills</span>
                  <h2>We are Much Experience in Website Design</h2>
                </div>
                <p>
                  Fortunately, we aren’t just designers and developers here—we
                  are writers, strategists, techs and creatives, all working
                  towards the same end goal: our client’s success. As a
                  full-service digital marketing agency
                </p>
                <div className="circle-counter">
                  <div className="circle-progress-item">
                    <ProgressBar value={89} color="#3180fc" />
                    <h5>SEO Service</h5>
                  </div>
                  <div className="circle-progress-item">
                    <ProgressBar value={76} color="#f1b000" />
                    <h5>Copywriting</h5>
                  </div>
                  <div className="circle-progress-item">
                    <ProgressBar value={63} color="#16b4f2" />
                    <h5>PPC</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="best-skills-image wow fadeInRight delay-0-1s">
                <Image  
                  src={bestSkills}
                  alt="Best Skills"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
export default SupportMarketingAreaImage;
