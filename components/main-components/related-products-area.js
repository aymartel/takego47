import Link from "next/link";
import Image from "next/image";
import product7 from "@/images/shop/product7.jpg";
import product5 from "@/images/shop/product5.jpg";
import product6 from "@/images/shop/product6.jpg";

const RelatedProductsArea = () => {
  return (
    <section className="related-products-area pb-80 rel z-1">
        <div className="container">
          <hr />
          <div className="section-title pt-110 text-center mb-50 wow fadeInUp delay-0-1s">
            <span className="sub-title style-two mb-15">Pre-made Template</span>
            <h2>Related Products</h2>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="product-item wow fadeInUp delay-0-1s">
                <div className="image">
                  <Image   src={product7} alt="Product" />
                </div>
                <div className="content">
                  <h5>Travel Service Templates</h5>
                  <div className="admin-ratting">
                    <span className="admin">
                      By <a href="#">Webtend</a> in CMS
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span>(8.5k )</span>
                    </div>
                  </div>
                  <div className="price-details-btn">
                    <span className="price">29.55</span>
                    <Link href="#product-details">
                      <a className="theme-btn">
                        Details <i className="fas fa-angle-double-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="product-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <Image   src={product5}  alt="Product" />
                </div>
                <div className="content">
                  <h5>Fitness UI Kits</h5>
                  <div className="admin-ratting">
                    <span className="admin">
                      By <a href="#">Webtend</a> in CMS
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span>(8.5k )</span>
                    </div>
                  </div>
                  <div className="price-details-btn">
                    <span className="price">58.55</span>
                    <Link href="#product-details">
                      <a className="theme-btn">
                        Details <i className="fas fa-angle-double-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="product-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <Image   src={product6}  alt="Product" />
                </div>
                <div className="content">
                  <h5>Dashboard UI Templates</h5>
                  <div className="admin-ratting">
                    <span className="admin">
                      By <a href="#">Webtend</a> in CMS
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span>(8.5k )</span>
                    </div>
                  </div>
                  <div className="price-details-btn">
                    <span className="price">37.55</span>
                    <Link href="#product-details">
                      <a className="theme-btn">
                        Details <i className="fas fa-angle-double-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
export default RelatedProductsArea;
