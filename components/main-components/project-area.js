import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const PreMadeTemplateIsotope = dynamic(
  () => import("../../../components/layout/PreMadeTemplateIsotope"),
  {
    ssr: false,
  }
);
const ProjectArea = () => {
  return (
    <section className="project-area-two pt-130 pb-100 rel z-1">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-7">
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-1s">
            <span className="sub-title style-two mb-15">
              Pre-made Template
            </span>
            <h2>Let’s See Our Popular Website Template</h2>
          </div>
        </div>
      </div>
      <PreMadeTemplateIsotope />
    </div>
  </section>
  );
};
export default ProjectArea;
