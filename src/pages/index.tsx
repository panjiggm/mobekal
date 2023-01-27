import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import HeroComingSoon from "../components/HeroComingSoon"
import Products from "../components/Products"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Mobekal | Warteg In Your Pocket</title>
        <meta name="description" content="Warteg In Your Pocket" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* <Hero /> */}
      <HeroComingSoon />
      {/* <Products /> */}
    </>
  )
}
