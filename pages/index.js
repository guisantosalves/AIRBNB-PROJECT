/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Banner from "../components/Banner";

export default function Home(props) {
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
      </main>
    </div>
  );
}

// get before delivery to the browser
export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp')
  .then(res => res.json());

  return {
    props: {
      exploreData
    }
  }
}