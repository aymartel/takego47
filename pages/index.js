import Layout from "@/components/layout/Layout";
import Hero1 from "@/components/secondaries-components/Hero1";
import { t } from "utils/utils";
import HeadTitle from "@/components/layout/HeadTitle";
import ContactArea from "@/components/main-components/contact-area";
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
const Index = () => {
  return (

    <Layout className="home-one">
      <HeadTitle text={t("title_home")} />
      <FloatingButton />
      <br/>
      <br/>
      <br/>
      <br/>
      <WhatWeOfferTwo title={t("whatweoffertwo_subtitle")} text={t("whatweoffertwo_text")} image={logo} />
      <WhatWeOfferTwoLeft title={t("whatweoffertwo_subtitle")} text={t("whatweoffertwo_text")} image={misssion} />
      <WhatWeOfferTwo title={t("whatweoffertwo_subtitle")} text={t("whatweoffertwo_text")} image={vission} />
      <WhatWeOfferTwoLeft title={t("whatweoffertwo_subtitle")} text={t("whatweoffertwo_text")} image={objective} />
      <WhatWeOfferTwo title={t("whatweoffertwo_subtitle")} text={t("whatweoffertwo_text")} image={service} />
      <WhatWeOfferTwoLeft title={t("whatweoffertwo_subtitle")} text={t("whatweoffertwo_text")} image={team} />
      <WhatWeOfferTwo title={t("whatweoffertwo_subtitle")} text={t("whatweoffertwo_text")} image={work} />
      <WhatWeOfferTwoLeft title={t("whatweoffertwo_subtitle")} text={t("whatweoffertwo_text")} image={payment} />
      <WhatWeOfferTwo title={t("whatweoffertwo_subtitle")} text={t("whatweoffertwo_text")} image={work} />
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