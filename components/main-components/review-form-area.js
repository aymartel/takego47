

const ReviewFormArea = () => {
  return (
    <section className="review-form-area mb-130 wow fadeInUp delay-0-1s">
        <div className="container">
          <form
            onSubmit={(e) => e.preventDefault()}
            id="review-form"
            className="review-form z-1 rel"
            name="review-form"
            action="#"
            method="post"
          >
            <h3>Leave Your Reviews</h3>
            <div className="ratting py-15">
              <b>Your Rating</b>
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <div className="row mt-25">
              <div className="col-lg-4">
                <div className="form-group">
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Full Name"
                    required=""
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control"
                    defaultValue=""
                    placeholder="Phone Number"
                    required=""
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <input
                    type="email"
                    id="email-address"
                    name="email"
                    className="form-control"
                    defaultValue=""
                    placeholder="Email Address"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-12 mb-30">
                <div className="form-group">
                  <select>
                    <option value="default" selected="">
                      Subject :
                    </option>
                    <option value="product">Product</option>
                    <option value="printing">Printing</option>
                    <option value="design">Design</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={4}
                    placeholder="Write Message"
                    required=""
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <button type="submit" className="theme-btn">
                    Send Reviews <i className="fas fa-angle-double-right" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
  );
};
export default ReviewFormArea;
