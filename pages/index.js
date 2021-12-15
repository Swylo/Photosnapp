import Head from "next/head";
import HomeMain from "../components/HomeMain";
import HomeGallery from "../components/HomeGallery";
import HomeFeatures from "../components/HomeFeatures";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photosnap Website</title>
        <meta name="description" content="Photosnap website made with nextJs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeMain />
      <HomeGallery />
      <HomeFeatures />
    </div>
  );
}
