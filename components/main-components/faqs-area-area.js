import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import OxencyAccordion from "../secondaries-components/OxencyAccordion";

const FaqsAreaArea = () => {
  const faqsData1 = [
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
  const faqsData2 = [
    {
      title: "How long will delivery take ?",
      dec: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey quae abillo inventore",
    },
    {
      title: "Do you have discounts for returning customers ?",
      dec: "Fortunately, we aren’t just designers and developers here we are writer strategists, techs and creatives working towards the same end goal our client’s success. As a full-service digital marketing agency",
    },
    {
      title: "Will you  provide website layout about design ?",
      dec: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey quae abillo inventore",
    },
    {
      title: "What payment methods do you accept ?",
      dec: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey quae abillo inventore",
    },
    {
      title: "How do your referral program work ?",
      dec: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey quae abillo inventore",
    },
  ];
  const [active, setActive] = useState(`a0`);
  const onClick = (value) => {
    setActive(value === active ? "" : value);
  };
  return (
    <section className="faqs-area-area bgc-lighter py-130 rel z-1">
    <div className="container">
      <div className="row justify-content-between align-items-end pb-5">
        <div className="col-xl-6 col-lg-8 wow fadeInUp delay-0-1s">
          <div className="section-title mb-35">
            <span className="sub-title style-two mb-15">Faqs</span>
            <h2>Asked Questions about Website Design</h2>
          </div>
        </div>
        <div className="col-lg-4 text-lg-end wow fadeInUp delay-0-4s">
          <Link href="#contact">
            <a className="theme-btn style-three mb-55">
              Add Questions <i className="fas fa-angle-double-right" />
            </a>
          </Link>
        </div>
      </div>
      <Accordion
        defaultActiveKey="a0"
        className="accordion style-two"
        id="faq-accordion"
      >
        <div className="row">
          <div className="col-lg-6 rmb-20 wow fadeInUp delay-0-1s">
            {faqsData1.map((data, i) => (
              <OxencyAccordion
                key={i}
                dec={data.dec}
                onClick={() => onClick(`a${i}`)}
                active={active}
                event={`a${i}`}
                title={data.title}
              />
            ))}
          </div>
          <div className="col-lg-6 wow fadeInUp delay-0-4s">
            {faqsData2.map((data, i) => (
              <OxencyAccordion
                key={i}
                dec={data.dec}
                onClick={() => onClick(`b${i}`)}
                active={active}
                event={`b${i}`}
                title={data.title}
              />
            ))}
          </div>
        </div>
      </Accordion>
    </div>
  </section>
  );
};
export default FaqsAreaArea;
