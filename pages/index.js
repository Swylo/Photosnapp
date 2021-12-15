import Head from "next/head";
import HomeMain from "../components/HomeMain";
import HomeGallery from "../components/HomeGallery";
import HomeFeatures from "../components/HomeFeatures";
import { homeMainElements } from "../libs/homeElements";

export const getStaticProps = async () => {
  return {
    props: { homeMainElements },
  };
};

export default function Home({ homeMainElements }) {
  return (
    <div>
      <Head>
        <title>Photosnap Website</title>
        <meta name="description" content="Photosnap website made with nextJs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeMain homeMainElements={homeMainElements} />
      <HomeGallery />
      <HomeFeatures />
    </div>
  );
}
