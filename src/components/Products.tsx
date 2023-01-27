import { Container, SimpleGrid, GridItem } from "@chakra-ui/react"
import CardProduct from "./CardProduct"

const Products = () => {
    return (
        <>
            <Container maxW={'5xl'} p={{ base: 5, md: 12 }}>
                <SimpleGrid spacing={8} minChildWidth={250}>
                    {products?.map((product, index) => {
                        return (
                            <CardProduct key={index} {...product} />
                        )
                    })}
                </SimpleGrid>
            </Container>
        </>
    )
}

export default Products

const products = [
    {
        isNew: true,
        imageURL:
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
        name: 'Wayfarer Classic',
        price: 4.5,
        rating: 4.2,
        numReviews: 34,
    },
    {
        isNew: true,
        imageURL:
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
        name: 'Wayfarer Classic',
        price: 4.5,
        rating: 4.2,
        numReviews: 34,
    },
    {
        isNew: true,
        imageURL:
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
        name: 'Wayfarer Classic',
        price: 4.5,
        rating: 4.2,
        numReviews: 34,
    },
    {
        isNew: true,
        imageURL:
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
        name: 'Wayfarer Classic',
        price: 4.5,
        rating: 4.2,
        numReviews: 34,
    },
    {
        isNew: true,
        imageURL:
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
        name: 'Wayfarer Classic',
        price: 4.5,
        rating: 4.2,
        numReviews: 34,
    },
    {
        isNew: true,
        imageURL:
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
        name: 'Wayfarer Classic',
        price: 4.5,
        rating: 4.2,
        numReviews: 34,
    },
]