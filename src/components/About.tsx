
import Image from 'next/image';
import Link from 'next/link';
import {
    Container,
    Stack,
    Text,
    Button,
    Box,
} from '@chakra-ui/react';
import { MotionScroll } from '@/utils/motion';

const About = () => {
    return (
        <Container maxW="5xl" p={{ base: 5, md: 12 }} pb={24}>
            <Stack justify='space-between' direction={{ base: 'column-reverse', md: 'row' }} gap={4}>
                <Stack direction="column" spacing={5}>
                    <MotionScroll>
                        <Text
                            fontSize={["lg", "xl"]}
                            color="primary"
                            textTransform="uppercase"
                            fontWeight="semibold"
                        >
                            Cerita Mobekal
                        </Text>
                    </MotionScroll>
                    <MotionScroll>
                        <Text
                            color='secondary'
                            _dark={{ color: 'gray.200' }}
                            fontSize='md'
                            textAlign="justify"
                            lineHeight="1.7"
                            fontWeight="normal"
                            maxW={{ base: '100%', md: '570px' }}
                        >
                            Siapa sih yang nggak kenal <Text as='span' fontWeight='600'>Warteg</Text>? Warung tempat makan favorit orang Indonesia ini sudah menjadi bagian yang melekat di berbagai lapisan masyarakat.
                        </Text>
                    </MotionScroll>
                    <MotionScroll>
                        <Text
                            color='secondary'
                            _dark={{ color: 'gray.200' }}
                            fontSize='md'
                            textAlign="justify"
                            lineHeight="1.7"
                            fontWeight="normal"
                            maxW={{ base: '100%', md: '570px' }}
                        >
                            Terkadang menjadi hal yang menjengkelkan ketika berada disuatu tempat, namun tidak terdapat <Text as='span' fontWeight='600'>Warteg</Text> disekitar. Dari situ lah <Text as='span' fontWeight='600'>MOBEKAL</Text> hadir.
                        </Text>
                    </MotionScroll>
                    <MotionScroll>
                        <Link href='/about'>
                            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                                Cerita Selengkapnya
                            </Button>
                        </Link>
                    </MotionScroll>
                </Stack>
                <MotionScroll>
                    <Box ml={{ base: 0, md: 5 }} display={{ base: 'flex' }} justifyContent={{ base: "center" }}>
                        <Image
                            width={300}
                            height={300}
                            // minW={{ base: 'auto', md: '30rem' }}
                            src="/img/all_product.webp"
                            priority
                            alt='All Mobekal Product'
                            style={{ borderRadius: 10, objectFit: 'cover' }}
                        // fallback={<Skeleton />}
                        />
                    </Box>
                </MotionScroll>
            </Stack>
        </Container>
    );
};

export default About;