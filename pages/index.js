import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>AirBnB</title>
        <meta name="description" content="Airbnb Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Let's GOOOOO</h1>
    </div>
  )
}
