import Link from "next/link";
import Image from "next/image";
import feature1 from "@/images/features/feature1.png";
import feature2 from "@/images/features/feature2.png";
import feature3 from "@/images/features/feature3.png";
import featureShape from "@/images/shapes/feature-shape.png";

const FeaturesWithImage = () => {
  return (
    <section className="feature-with-image-area bgc-black text-white py-130 rel z-1">
        <div className="container">
          <div className="feature-with-image">
            <div className="feature-image wow fadeInLeft delay-0-1s">
              <Image   src={feature1} alt="Feature" />
            </div>
            <div className="feature-content wow fadeInRight delay-0-1s">
              <h3>Advanced design features.</h3>
              <p>
                Sit amet consectetur adipiscing elit sed do eiusmod tempor
                incididunt ut labore et dolore magna aliquaes suspendisse
                ultrices gravida commodo viverra mae cenas accumsan lacus vel
                facilisis.
              </p>
              <Link href="#service-details">
                <a className="read-more">
                  Learn More <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="feature-shape">
              <Image   src={featureShape} alt="Shape" />
            </div>
          </div>
          <div className="feature-with-image">
            <div className="feature-shape">
              <Image   src={featureShape} alt="Shape" />
            </div>
            <div className="feature-content wow fadeInRight delay-0-1s">
              <h3>We’ll instantly create a perfect design</h3>
              <p>
                Labore et do magna aliquaes suspendisse ultrices gravida commodo
                maeenas accumsan
              </p>
              <ul className="list-style-three">
                <li>Is it easy to create a website</li>
                <li>Build creative website easily</li>
              </ul>
              <Link href="#service-details">
                <a className="read-more">
                  Learn More <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="feature-image wow fadeInLeft delay-0-1s">
              <Image   src={feature2} alt="Feature" />
            </div>
          </div>
          <div className="feature-with-image">
            <div className="feature-image wow fadeInLeft delay-0-1s">
              <Image   src={feature3} alt="Feature" />
            </div>
            <div className="feature-content wow fadeInRight delay-0-1s">
              <h3>Share your ideas. Grow your brand</h3>
              <p>
                Sit amet consectetur adipiscing elit sed do eiusmod tempor
                incididunt ut labore et dolore magna aliquaes suspendisse
                ultrices gravida commodo viverra mae cenas accumsan lacus vel
                facilisis.
              </p>
              <Link href="#service-details">
                <a className="read-more">
                  Learn More <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="feature-shape">
              <Image   src={featureShape}  alt="Shape" />
            </div>
          </div>
        </div>
      </section>
  );
};
export default FeaturesWithImage;
