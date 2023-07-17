
const WhatWeOfferMap= ({background,id,title, adr1,adr2,adr3}) => {
  return (
    <section id={id} className={`what-we-offer-two rel z-1 background${background}`} >
    <div className="container">
      <div className="row large-gap align-items-center">
        <div className="col-lg-6">
          <div className="what-we-offer-image rmb-65 wow fadeInRight delay-0-1s">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11098.933230966064!2d-99.19862884330989!3d19.640199377580068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21e18fe11ba4b%3A0x55b73b00b31d8bff!2sParque%20Zoquipan%2041-interior%203%2C%20Jardines%20del%20Alba%202%2C%2054750%20Cuautitl%C3%A1n%20Izcalli%2C%20M%C3%A9x.%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2sru!4v1689580617629!5m2!1ses-419!2sru" width="100%" height="300"   loading="lazy" ></iframe>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="what-we-offer-content wow fadeInLeft delay-0-1s">
            <div className="section-title mb-25">
              
              <h2 className="text-white">{title}</h2>
            </div>
            <ul>
              <li><i className="fas fa-map-marker-check " /> {adr1} </li>
              <li><i className="fas fa-map-marker-check " /> {adr2} </li>
              <li><i className="fas fa-map-marker-check " /> {adr3} </li>
            </ul>
            <p>
            
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
export default WhatWeOfferMap;
