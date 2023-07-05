import Layout from "@/components/layout/Layout";
import ClientsFeedback from "@/components/secondaries-components/ClientsFeedback";
import Hero1 from "@/components/secondaries-components/Hero1";
import RecentProjects from "@/components/secondaries-components/RecentProjects";
import { t } from "utils/utils";
import HeadTitle from "@/components/layout/HeadTitle";
import FeatureAreaFive from "@/components/main-components/feature-area-five";
import AboutAreaOne from "@/components/main-components/about-area-one";
import StatisticsAreaThree from "@/components/main-components/statistics-area-three";
import DesignFeatureArea from "@/components/main-components/design-feature-area";
import WorkProcess from "@/components/main-components/work-process";
import CallToActionArea from "@/components/main-components/call-to-action-area";
import ContactArea from "@/components/main-components/contact-area";
import NewsBlogArea from "@/components/main-components/news-blog-area";
import FeedbackArea from "@/components/main-components/feedback-area";
import WwdoTwoArea from "@/components/main-components/ww-do-two-area";
import FaqsArea from "@/components/main-components/faqs-area";
import ContactUsPageArea from "@/components/main-components/contact-us-page-area";
import OurLocationAddressArea from "@/components/main-components/our-location-address-area";
import ContactPageMap from "@/components/main-components/contact-page-map";
import WhatWeOfferTwo from "@/components/main-components/what-we-offer-two";
import ResponsiveDesignArea from "@/components/main-components/ResponsiveDesignArea";
import FloatingButton from "@/components/secondaries-components/float-button";
import PricingAreaSix from "@/components/main-components/pricing-area-six";
import PricingAreaTwo from "@/components/main-components/pricing-area-two";
import PricingAreaFive from "@/components/main-components/pricing-area-five";
import PricingArea from "@/components/main-components/pricing-area";
import FeaturesAreaSeven from "@/components/main-components/features-area-seven";
import FeatureAreaFour from "@/components/main-components/feature-area-four";
const Index = () => {
  return (

    <Layout className="home-one">
      <HeadTitle text={t("title_home")} />
      <Hero1 />
      {/* <FeatureAreaFive/> */}
      <FloatingButton />
      <AboutAreaOne />

      {/* <StatisticsAreaThree /> */}
      <WhatWeOfferTwo />
      <div id="services">
        <br />
        <br />
        <br />
      </div>

      <FeatureAreaFour/>
      <PricingArea />
      <WorkProcess />
      {/* <CallToActionArea /> */}
      {/* <PricingAreaSix /> */}
      {/* <RecentProjects /> */}
      {/* <DesignFeatureArea/> */}
      <div id="faqs">
        <br />
        <br />
        <br />
      </div>
      <FaqsArea />
      {/* <ClientsFeedback /> */}
      <FeedbackArea />
      <ContactArea />
      {/* <ContactUsPageArea/> */}
      {/* Contact Us Page Area end */}
      {/* Our Location Address Area start */}
      {/* <OurLocationAddressArea/> */}
      {/* Our Location Address Area end */}
      {/* Location Map Area Start */}
      {/* <ContactPageMap/> */}

    </Layout>
  );
};
export default Index;
export async function getStaticProps(context) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language.
      messages: (await import(`../messages/${context.locale}.json`)).default
    }
  };
}