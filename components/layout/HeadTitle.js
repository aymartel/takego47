import Head from "next/head";
const HeadTitle = ({text}) => {
  return (
    <Head>
      <title>{text}</title>
    </Head>
  );
};
export default HeadTitle;
