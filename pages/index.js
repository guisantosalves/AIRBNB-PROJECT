/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// components
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardData }) {
  return (
    <div className="">
      {/* it's like Head in html file */}
      <Head>
        <title>AirBnB</title>
        <meta name="description" content="Airbnb Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <main className="max-w-5xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        </section>

        {/* pull some data from a server */}
        {/* ultil 640px wil be 2 colums*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-col-4">
          {exploreData?.map((item, index) => (
            <SmallCard
              key={index}
              location={item?.location}
              distance={item?.distance}
              img={item?.img}
            />
          ))}
        </div>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData.map(({ img, title }, index) => (
              <MediumCard key={index} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img={"https://links.papareact.com/4cj"}
          title="The greatest Outdoors"
          desctiption="Wishlist curated by Airbnb"
          buttonText="Get Inspired"
        />

      </main>

      <Footer />
    </div>
  );
}

// get before delivery to the browser
// when return the props we can get that in the component
export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  const cardData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
