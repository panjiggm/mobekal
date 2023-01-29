import { useMediaQuery, Container, SimpleGrid } from '@chakra-ui/react';
import CardProduct from "./CardProduct"

const Products = () => {
    return (
        <>
            <Container maxW={'5xl'} p={{ base: 5, md: 12 }}>
                <SimpleGrid spacing={4} minChildWidth={250}>
                    {products?.map((product, index) => {
                        return (
                            <CardProduct
                                key={index}
                                title={product.title}
                                description={product.description}
                                language={product.language}
                                url={product.url}
                                stargazers_count={product.stargazers_count}
                                forks_count={product.forks_count}
                                img_url={product.img_url}
                                variants={product.techStack}
                            />
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
        title: 'Mustofa Kentang',
        description: 'Portfolio app to show my skills and experience.',
        language: 'Typescript',
        techStack: [{
            id: '1', name: 'Original', color: "#a1a1a1"
        },
        {
            id: '2', name: 'Balado', color: "#e58e26"
        },
        {
            id: '3', name: 'Pedas', color: "#e55039"
        }],
        url: 'https://github.com/MA-Ahmad/myPortfolio',
        live: 'https://mahmad.me',
        stargazers_count: 96,
        forks_count: 22,
        img_url: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

    },
    {
        title: 'Mustofa Talas',
        description: 'Personal portfolio app to show my skills and experience.',
        language: 'Typescript',
        techStack: [{
            id: '1', name: 'Original', color: "#a1a1a1"
        },
        {
            id: '2', name: 'Balado', color: "#e58e26"
        },
        {
            id: '3', name: 'Pedas', color: "#e55039"
        }],
        url: 'https://github.com/MA-Ahmad/portfolio',
        live: 'https://ma-ahmad.github.io/portfolio',
        stargazers_count: 67,
        forks_count: 14,
        img_url: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80'

    },
    {
        title: 'Orek Tempe',
        description: 'Portfolio app to show my skills and experience.',
        language: 'Typescript',
        techStack: [{ id: '1', name: 'Original', color: "#a1a1a1" }],
        url: 'https://github.com/MA-Ahmad/myPortfolio',
        live: 'https://mahmad.me',
        stargazers_count: 96,
        forks_count: 22,
        img_url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'

    },
    {
        title: 'Bubuk Serundeng',
        description: 'Personal portfolio app to show my skills and experience.',
        language: 'Typescript',
        techStack: [{ id: '1', name: 'Original', color: "#a1a1a1" }],
        url: 'https://github.com/MA-Ahmad/portfolio',
        live: 'https://ma-ahmad.github.io/portfolio',
        stargazers_count: 67,
        forks_count: 14,
        img_url: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

    },
    {
        title: 'Bubuk Kremesan',
        description: 'Portfolio app to show my skills and experience.',
        language: 'Typescript',
        techStack: [{ id: '1', name: 'Original', color: "#a1a1a1" }],
        url: 'https://github.com/MA-Ahmad/myPortfolio',
        live: 'https://mahmad.me',
        stargazers_count: 96,
        forks_count: 22,
        img_url: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80'

    },
    {
        title: 'Udang Rebon',
        description: 'Personal portfolio app to show my skills and experience.',
        language: 'Typescript',
        techStack: [{ id: '1', name: 'Original', color: "#a1a1a1" }],
        url: 'https://github.com/MA-Ahmad/portfolio',
        live: 'https://ma-ahmad.github.io/portfolio',
        stargazers_count: 67,
        forks_count: 14,
        img_url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'

    }
]

let techStack = [
    {
        id: '1',
        name: 'Original'
    },
    {
        id: '2',
        name: 'Balado'
    },
    {
        id: '3',
        name: 'Pedas'
    }
]