import Link from "next/link";
import Image from "next/image";

import faqPage from "@/images/faqs/faq-page.jpg";
const FaqPageAboutArea = () => {
  return (
    <section className="faq-page-about-area pt-130">
        <div className="container">
          <div className="row large-gap justify-content-center align-items-center pb-115">
            <div className="col-xl-5 col-lg-6">
              <div className="faq-page-content rmb-65 wow fadeInRight delay-0-1s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">
                    Finding Help
                  </span>
                  <h2>How Can We Help</h2>
                </div>
                <p>
                  Start building your first prototype in no time. Ogency
                  intuitive drag &amp; drop interface gives you all the building
                  blocks that you need to get started! No skills required.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="faq-search-form mt-40 mb-20"
                >
                  <label htmlFor="search">
                    <i className="far fa-search" />
                  </label>
                  <input
                    type="text"
                    id="search"
                    placeholder="Find your category"
                    required=""
                  />
                  <button type="submit">
                    <i className="fas fa-chevron-right" />
                  </button>
                </form>
                <p>
                  <b>Suggestions:</b> Dashboard, Payments, Refunds, Delivery
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-page-image wow fadeInLeft delay-0-1s">
                <Image   src={faqPage} alt="FAQs" />
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
  );
};
export default FaqPageAboutArea;
