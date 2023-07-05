import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

const TeamPageArea  = () => {
  const TeamIsotope = dynamic(
    () => import("../../components/layout/TeamIsotope"),
    {
      ssr: false,
    }
  );
  return (
    <section className="team-page-area pb-65 rel z-1">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-7">
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-1s">
            <span className="sub-title style-two mb-15">Amazing Team</span>
            <h2>We Have Well Experience Team Member</h2>
          </div>
        </div>
      </div>
      <TeamIsotope />
    </div>
  </section>
  );
};
export default TeamPageArea;
