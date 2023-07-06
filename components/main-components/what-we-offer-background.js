import Image from "next/image";

const WhatWeOfferBackground = ({background,id,title, text, image}) => {
  return (
    <section id={id} className={`what-we-offer-two mb-130 rel z-1 background${background}`} >
    <div className="container">
      <div className="row large-gap align-items-center">
        <div className="col-lg-6">
          <div className="what-we-offer-image rmb-65 wow fadeInRight delay-0-1s">
            <Image  
              src={image}
              alt="What We Offer"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="what-we-offer-content wow fadeInLeft delay-0-1s">
            <div className="section-title mb-25">
              
              <h2>{title}</h2>
            </div>
            <p>
            {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
export default WhatWeOfferBackground;
