import { Container, SimpleGrid, Box, Text } from '@chakra-ui/react';
import CardProduct from "./CardProduct"
import { ProductsProps } from 'types'
import { MotionScroll } from '@/utils/motion';

const Products = ({ products }: ProductsProps) => {
    return (
        <>
            <Container maxW={'5xl'} p={{ base: 5, md: 12 }} mt={{ base: 0, md: 20 }}>
                <MotionScroll>
                    <Box w='full' display='flex' flexDirection='column' alignItems='center'>
                        <Text
                            fontSize={["lg", "xl"]}
                            color="primary"
                            textTransform="uppercase"
                            fontWeight="semibold"
                            mb={2}
                        >
                            Menu
                        </Text>
                        <Text mb={[6, 8, 12]} fontSize={["md", "lg", "xl"]} colorScheme="secondary">
                            Pilih menu <Text as='span' fontWeight='600'>Warteg</Text> favorit kamu
                        </Text>
                    </Box>
                </MotionScroll>

                <SimpleGrid spacing={4} minChildWidth={250}>
                    {products.map((product, index) => {
                        return (
                            <CardProduct
                                key={index}
                                {...product}
                            />
                        )
                    })}
                </SimpleGrid>

                <MotionScroll>
                    <Box w='full'>
                        <Text mt={[4, 6, 10]} fontSize='sm' colorScheme="gray.600">
                            * Menu lainya akan segera menyusul
                        </Text>
                    </Box>
                </MotionScroll>
            </Container>
        </>
    )
}

export default Products