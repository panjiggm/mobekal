import Head from 'next/head';
import { Flex, Avatar, Box, Container } from '@chakra-ui/react';
import { MotionBox, MotionFlex } from '@/utils/motion';
import Header from '@/components/Header';
import Layout from "@/components/Layout"

const ANIMATION_DURATION = 0.5;

const About = () => {
    const color = 'gray.400';

    return (
        <Layout>
            <Head>
                <title>Tentang Mobekal</title>
                <meta name="description" content="Warteg In Your Pocket" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxW="5xl" p={{ base: 5, md: 12 }}>
                <Flex direction={['column', 'column', 'row']}>
                    <MotionBox
                        opacity="0"
                        initial={{
                            translateX: -150,
                            opacity: 0
                        }}
                        animate={{
                            translateX: 0,
                            opacity: 1,
                            transition: {
                                duration: ANIMATION_DURATION
                            }
                        }}
                        m="auto"
                        mb={[16, 16, 'auto']}
                    >
                        <MotionBox whileHover={{ scale: 1.2 }} rounded="full" shadow="lg">
                            <Avatar
                                size="2xl"
                                p={1}
                                showBorder={true}
                                borderColor={color}
                                src='/img/logo_raw.png'
                            />
                        </MotionBox>
                    </MotionBox>
                    <MotionFlex
                        position="relative"
                        ml={['auto', 'auto', 16]}
                        m={['auto', 'initial']}
                        w={['90%', '85%', '80%']}
                        maxW="800px"
                        opacity="0"
                        justify="center"
                        direction="column"
                        initial={{
                            opacity: 0,
                            translateX: 150
                        }}
                        animate={{
                            opacity: 1,
                            translateX: 0,
                            transition: {
                                duration: ANIMATION_DURATION
                            }
                        }}
                    >
                        <Box position="relative">
                            <MotionBox whileHover={{ translateY: -5 }} width="max-content">
                                <Header underlineColor={color} mt={0} cursor="pointer" width="max-content">
                                    Hai!
                                </Header>
                            </MotionBox>
                        </Box>
                        <Box as="h2" fontSize={['lg', 'xl', '2xl']} fontWeight="400" textAlign="left">
                            Mobekal adalah masakan khas <Box as="strong" fontWeight="600">Warteg</Box> yang dikemas secara praktis agar bisa menjadi teman bekal kamu dimanapun dan kapanpun.
                        </Box>
                        <Box as="h2" fontSize={['lg', 'xl', '2xl']} fontWeight="400" mt={5} textAlign="left">
                            Tersedia juga dalam kemasan pouch dengan ukuran yang lebih besar, sehingga bisa menjadi stok pendamping nasi dirumah ataupun dikosan Kamu. 😊
                        </Box>
                    </MotionFlex>
                </Flex>
            </Container>
        </Layout>
    )
}

export default About