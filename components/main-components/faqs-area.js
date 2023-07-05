import { useState } from "react";
import { Accordion } from "react-bootstrap";
import OxencyAccordion from "../secondaries-components/OxencyAccordion";
import faq1 from "@/images/faqs/f3.jpg";
import faq2 from "@/images/faqs/f2.jpg";
import faq3 from "@/images/faqs/f1.jpg";
import Image from "next/image";
import { useTranslations } from "next-intl";
const FaqsArea = () => {
  const t = useTranslations('Messages');
  const faqsData = [
    {
      title: "Will you  provide website layout about design ?",
      dec: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey quae abillo inventore",
    },
    {
      title: "How much does cost to design website ?",
      dec: "Fortunately, we aren’t just designers and developers here we are writer strategists, techs and creatives working towards the same end goal our client’s success. As a full-service digital marketing agency",
    },
    {
      title: "How many revisions can i make the  design ?",
      dec: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey quae abillo inventore",
    },
    {
      title: "Can i uplode this  design in my personal work?",
      dec: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey quae abillo inventore",
    },
  ];
  const [active, setActive] = useState(`collapse0`);
  const onClick = (value) => {
    setActive(value === active ? "" : value);
  };
  return (
    <section className="faqs-area pb-130 rel z-1" id="faqs">
      <div className="container">
        <div className="row large-gap justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="faq-images rmb-65 rel">
              <div className="row">
                <div className="col-6 col-small">
                  <Image
                    className="image-one wow fadeInUp delay-0-1s"
                    src={faq1}
                    alt="FAQs"
                  />
                  <Image
                    className="image-two wow fadeInUp delay-0-4s"
                    src={faq2}
                    alt="FAQs"
                  />
                </div>
                <div className="col-6 col-small">
                  <Image
                    className="image-three mt-95 wow fadeInUp delay-0-6s"
                    src={faq3}
                    alt="FAQs"
                  />
                  <div className="year-of-experience wow zoomIn delay-0-6s">
                    <span className="number">25</span>
                    {t("yearofexperience")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-content wow fadeInRight delay-0-1s">
              <div className="section-title mb-40">
                <span className="sub-title style-two mb-15">{t("faqsarea_title")}</span>
                <h2>{t("faqsarea_subtitle")}</h2>
              </div>
              <Accordion
                defaultActiveKey="collapse0"
                className="accordion"
                id="faq-accordion"
              >

                <OxencyAccordion
                  dec={t("faqsData_desc1")}
                  event="collapse1"
                  key={1}
                  title={t("faqsData_title1")}
                  onClick={() => onClick("collapse1")}
                  active={active}
                />
                <OxencyAccordion
                  dec={t("faqsData_desc2")}
                  event="collapse2"
                  key={2}
                  title={t("faqsData_title2")}
                  onClick={() => onClick("collapse2")}
                  active={active}
                />
                <OxencyAccordion
                  dec={t("faqsData_desc3")}
                  event="collapse3"
                  key={3}
                  title={t("faqsData_title3")}
                  onClick={() => onClick("collapse3")}
                  active={active}
                />
                <OxencyAccordion
                  dec={t("faqsData_desc4")}
                  event="collapse4"
                  key={4}
                  title={t("faqsData_title4")}
                  onClick={() => onClick("collapse4")}
                  active={active}
                />
              </Accordion>
            </div>
          </div>
        <br/>
        <br/>
        <br/>
        </div>
      </div>
    </section>
  );
};
export default FaqsArea;
