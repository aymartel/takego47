import Layout from "@/components/layout/Layout";
import { t } from "utils/utils";
import HeadTitle from "@/components/layout/HeadTitle";
import WhatWeOfferTwo from "@/components/main-components/what-we-offer-two";
import FloatingButton from "@/components/secondaries-components/float-button";
import WhatWeOfferTwoLeft from "@/components/main-components/what-we-offer-two-left";
import logo from "@/images/take/Logo.svg";
import misssion from "@/images/take/misssion-01.svg";
import vission from "@/images/take/vission-01.svg";
import objective from "@/images/take/objective-01.svg";
import service from "@/images/take/service-01.svg";
import team from "@/images/take/team-01.svg";
import work from "@/images/take/work-01.svg";
import payment from "@/images/take/payment-01.svg";
import map from "@/images/take/Map.png";
import WhatWeOfferBackground from "@/components/main-components/what-we-offer-background";
import WhatWeOfferMap from "@/components/main-components/what-we-offer-map";
const Index = () => {
  return (

    <Layout className="home-one">

      <HeadTitle text={t("title_home")} />
      <FloatingButton />

      <WhatWeOfferBackground background="map pt-4" id="home" title={t("take_slogan")} text={""} image={logo} />
      <div id="about" >
        <WhatWeOfferTwoLeft title={t("take_mision")} text={t("take_misiontext")} image={misssion} />
        <WhatWeOfferTwo title={t("take_vision")} text={t("take_visiontext")} image={vission} />
        <WhatWeOfferTwoLeft title={t("take_objective")} text={""} image={objective} />
      </div>
      <div id="service" >

        <WhatWeOfferTwo id="service" title={t("take_service")} text={t("take_servicetext")} image={service} />
        <WhatWeOfferTwoLeft title={t("take_work")} text={t("take_worktext")} image={work} />
        <WhatWeOfferTwo title={t("take_payment")} text={t("take_paymenttext")} image={payment} />
      </div>
      <WhatWeOfferTwoLeft id="team" title={t("take_team")} text={t("take_teamtext")} image={team} />
      <WhatWeOfferMap  id="contact" title={t("contact")} text={t("take_address1")}/>
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