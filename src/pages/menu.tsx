import Head from 'next/head'
import Layout from '@/components/Layout'
import Products from "@/components/Products"

import { ProductsProps } from 'types'

const Menu = ({ products }: ProductsProps) => {
    return (
        <Layout>
            <Head>
                <title>Menu Mobekal</title>
                <meta name="description" content="Warteg In Your Pocket" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Products products={products} />
        </Layout>
    )
}

export default Menu

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