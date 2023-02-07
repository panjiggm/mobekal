import Head from 'next/head'
import Hero from "@/components/Hero"
import HeroComingSoon from "@/components/HeroComingSoon"
import Products from "@/components/Products"
import Pricing from "@/components/Pricing"
import Features from "@/components/Features"
import About from '@/components/About'
import Faq from '@/components/Faq'
import Layout from '@/components/Layout'

import { ProductsProps } from 'types'

export default function Home({ products }: ProductsProps) {

  return (
    <Layout>
      <Head>
        <title>Mobekal</title>
        <meta name="description" content="Warteg In Your Pocket" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      {/* <HeroComingSoon /> */}
      <About />
      <Products products={products} />
      <Pricing />
      <Features />
      <Faq />
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  // Get protocol from context
  const protocol = context.req.headers["x-forward-proto"] || "http";
  const host = context.req.headers.host;

  const response = await fetch(`${protocol}://${host}/api/products`)
  const products = await response.json()

  return {
    props: {
      products
    }
  }
}
