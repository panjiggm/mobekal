import { NextApiRequest, NextApiResponse } from "next";
import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } from "config";
import { AirtablePriceRecord, AirtableProductPecord } from "types";

export default async function products(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.status(405).json({ message: "Method not allowed" })
    }

    const getProducts = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/product?maxRecords=10&view=Grid%20view`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            "Content-Type": "application/json"
        }
    })

    const getPrice = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/price?maxRecords=10&view=Grid%20view`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            "Content-Type": "application/json"
        }
    })

    const dataProducts = await getProducts.json() as AirtableProductPecord
    const dataPrice = await getPrice.json() as AirtablePriceRecord

    const response = dataProducts.records.map((product) => {
        let newProduct = product.fields;
        let priceId = newProduct.price[0];
        let newVariants = newProduct.variants.split(', ');

        if (!newProduct.hasOwnProperty('is_signature')) {
            newProduct = {
                ...product.fields,
                is_signature: false,
            }
        }

        const findPrice = dataPrice.records.find((price) => {
            delete price.fields.product
            return price.id === priceId
        })

        return {
            ...newProduct,
            variants: newVariants,
            price: findPrice?.fields
        }
    })

    return res.status(200).json(response)
}