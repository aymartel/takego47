import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { feedbackActive } from "../layout/sliderProps";
import FeedbackItem from "../secondaries-components/feedback-item";
import man1 from "@/images/feedback/man1.jpg";
import man2 from "@/images/feedback/man2.jpg";
import logoSaludE from "@/images/feedback/saludE.png";
import logoKRB from "@/images/feedback/KRB.png";
import logoCarlos from "@/images/feedback/carlos.png";
import author3 from "@/images/feedback/avatar.png";
import authorcarlos from "@/images/feedback/carlitin.png";
import { useTranslations } from "next-intl";
const FeedbackArea = () => {
  const t = useTranslations('Messages');
  return (
    <section className="feedback-area pb-130 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-40 wow fadeInUp delay-0-1s">
              <span className="sub-title style-two mb-20">
                {t("feedbackarea_title")}
              </span>
              <h2>{t("feedbackarea_subtitle")}</h2>
            </div>
          </div>
        </div>
        <Slider {...feedbackActive} className="feedback-active">
          <FeedbackItem
            srcLogo={logoKRB}
            title={t("feedbackitem_title1")}
            text={t("feedbackitem_text1")}
            srcAvatar={author3}
            name="Kalim D."
            position={t("feedbackitem_position2")}
          />

          <FeedbackItem
            srcLogo={logoSaludE}
            title={t("feedbackitem_title2")}
            text={t("feedbackitem_text2")}
            srcAvatar={author3}
            name="Jhony O."
            position={t("feedbackitem_position3")}
          />


          <FeedbackItem
            srcLogo={logoCarlos}
            title={t("feedbackitem_title3")}
            text={t("feedbackitem_text3")}
            srcAvatar={authorcarlos}
            name="Carlos B."
            position={t("feedbackitem_position3")}
          />



        </Slider>
      </div>
      <div className="feedback-shape one">
        <Image layout='fill' src={man1} alt="Man Shape" />
      </div>
      <div className="feedback-shape two">
        <Image layout='fill' src={man2} alt="Man Shape" />
      </div>
    </section>
  );
};
export default FeedbackArea;
