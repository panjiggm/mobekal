import { ReactNode } from 'react'
import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    Text,
    useToken,
    Stack,
    SimpleGrid,
    Icon,
    Link,
    Badge,
    Container,
} from "@chakra-ui/react";
import { MotionScroll } from '@/utils/motion';

const Pricing = () => {
    const topBg = useColorModeValue("primary", "gray.700");
    const bottomBg = useColorModeValue("white", "gray.800");
    const [bottomBgHex] = useToken("colors", [bottomBg]);

    const Feature = ({ children }: { children: ReactNode }) => {
        return (
            <Flex align="center">
                <Flex shrink={0}>
                    <Icon
                        boxSize={5}
                        mt={1}
                        mr={2}
                        color="brand.500"
                        _dark={{ color: "brand.300" }}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </Icon>
                </Flex>
                <Box ml={4}>
                    <chakra.span mt={2} color="gray.700" _dark={{ color: "gray.400" }}>
                        {children}
                    </chakra.span>
                </Box>
            </Flex>
        )
    }

    return (
        <Box bg={topBg} my={20}>
            <Container maxW={'5xl'}>
                <Flex
                    _dark={{ bg: "gray.600" }}
                >
                    <Box
                        mx="auto"
                        textAlign={{ base: "left", md: "center" }}
                        w="full"
                    >
                        <Box pt={20}>
                            <MotionScroll>
                                <Box w="full" px={[2, 4]} mx="auto">
                                    <Text
                                        fontSize={["lg", "xl"]}
                                        color="white"
                                        textTransform="uppercase"
                                        fontWeight="semibold"
                                        mb={4}
                                    >
                                        Harga
                                    </Text>
                                    <Text
                                        mb={4}
                                        fontSize={["3xl", "5xl"]}
                                        fontWeight="bold"
                                        lineHeight={[10, 'none']}
                                        color="white"
                                    >
                                        Harga bersahabat untuk semua kalangan
                                    </Text>
                                    <chakra.p mb={8} fontSize={["md", "lg", "xl"]} color="gray.100">
                                        Semurah ketika Kamu beli di <chakra.span color='gray.800' fontWeight='bold'>Warteg</chakra.span>, se-enak masakan <chakra.span color='gray.800' fontWeight='bold'>Mama</chakra.span> di rumah
                                    </chakra.p>
                                </Box>
                            </MotionScroll>
                            <Box>
                                <MotionScroll>
                                    <SimpleGrid
                                        columns={[1, 1, 2]}
                                        gap="24px"
                                        rounded="md"
                                        mx={[2, 6, 10, 24]}
                                        textAlign="left"
                                    >
                                        <Box
                                            bg="white"
                                            _dark={{ bg: "gray.800" }}
                                            pt={10}
                                            shadow="lg"
                                            rounded="md"
                                        >
                                            <Flex direction="column">
                                                <Box px={10} pb={5}>
                                                    <Badge
                                                        mb={1}
                                                        fontSize="xs"
                                                        letterSpacing="wide"
                                                        colorScheme="brand"
                                                        fontWeight="medium"
                                                        rounded="full"
                                                        px={4}
                                                        py={1}
                                                    >
                                                        Saku
                                                    </Badge>
                                                    <Text
                                                        mb={2}
                                                        fontSize="5xl"
                                                        fontWeight={["bold", "extrabold"]}
                                                        color="gray.900"
                                                        _dark={{ color: "gray.50" }}
                                                        lineHeight="tight"
                                                    >
                                                        Rp2k
                                                        <chakra.span
                                                            fontSize="2xl"
                                                            fontWeight="medium"
                                                            color="gray.600"
                                                            _dark={{ color: "gray.400" }}
                                                        >
                                                            {" "}
                                                            /sachet{" "}
                                                        </chakra.span>
                                                    </Text>
                                                    <chakra.p
                                                        mb={6}
                                                        fontSize="md"
                                                        color="gray.500"
                                                        _dark={{ color: "gray.500" }}
                                                    >
                                                        Dengan harga mulai dari 2.500 rupiah, kamu sudah bisa menikmati menu andalan MOBEKAL yang bisa kamu bawa kemanapun buat nemenin bekal kamu.
                                                    </chakra.p>
                                                </Box>
                                                <Flex
                                                    px={10}
                                                    pb={10}
                                                    direction="column"
                                                    roundedBottom="md"
                                                >
                                                    <Link
                                                        w="full"
                                                        display="inline-flex"
                                                        alignItems="center"
                                                        justifyContent="center"
                                                        px={5}
                                                        py={3}
                                                        border="solid transparent"
                                                        fontWeight="semibold"
                                                        rounded="md"
                                                        shadow="md"
                                                        _light={{ color: "white" }}
                                                        bg="secondary"
                                                        _dark={{ bg: "brand.500" }}
                                                        _hover={{
                                                            bg: "gray.700",
                                                            _dark: { bg: "brand.600" },
                                                        }}
                                                    >
                                                        Beli
                                                    </Link>
                                                </Flex>
                                            </Flex>
                                        </Box>
                                        <Box
                                            bg="white"
                                            _dark={{ bg: "gray.800" }}
                                            pt={10}
                                            shadow="lg"
                                            rounded="md"
                                        >
                                            <Flex direction="column">
                                                <Box px={10} pb={5}>
                                                    <Badge
                                                        mb={1}
                                                        fontSize="xs"
                                                        letterSpacing="wide"
                                                        colorScheme="brand"
                                                        fontWeight="medium"
                                                        rounded="full"
                                                        px={4}
                                                        py={1}
                                                    >
                                                        Kantong
                                                    </Badge>
                                                    <Text
                                                        mb={2}
                                                        fontSize="5xl"
                                                        fontWeight={["bold", "extrabold"]}
                                                        color="gray.900"
                                                        _dark={{ color: "gray.50" }}
                                                        lineHeight="tight"
                                                    >
                                                        Rp12k
                                                        <chakra.span
                                                            fontSize="2xl"
                                                            fontWeight="medium"
                                                            color="gray.600"
                                                            _dark={{ color: "gray.400" }}
                                                        >
                                                            {" "}
                                                            /pouch{" "}
                                                        </chakra.span>
                                                    </Text>
                                                    <chakra.p
                                                        mb={6}
                                                        fontSize="md"
                                                        color="gray.500"
                                                        _dark={{ color: "gray.500" }}
                                                    >
                                                        MOBEKAL menyediakan varian dengan ukuran yang lebih besar. Mulai 12.000 rupiah saja bisa buat stok di rumah, di kosan, di tempat kerja. Nggak perlu repot beli keluar.
                                                    </chakra.p>
                                                </Box>
                                                <Flex
                                                    px={10}
                                                    pb={10}
                                                    direction="column"
                                                    roundedBottom="md"
                                                >
                                                    <Link
                                                        w="full"
                                                        display="inline-flex"
                                                        alignItems="center"
                                                        justifyContent="center"
                                                        px={5}
                                                        py={3}
                                                        border="solid transparent"
                                                        fontWeight="semibold"
                                                        rounded="md"
                                                        shadow="md"
                                                        _light={{ color: "white" }}
                                                        bg="secondary"
                                                        _dark={{ bg: "brand.500" }}
                                                        _hover={{
                                                            bg: "gray.700",
                                                            _dark: { bg: "brand.600" },
                                                        }}
                                                    >
                                                        Beli
                                                    </Link>
                                                </Flex>
                                            </Flex>
                                        </Box>
                                    </SimpleGrid>
                                </MotionScroll>
                                <MotionScroll>
                                    <Flex
                                        mb="100px"
                                        mx={[2, 6, 10, 24]}
                                        p={10}
                                        mt={5}
                                        rounded="md"
                                        bg="#F9FAFB"
                                        _dark={{ bg: "gray.700" }}
                                        align="center"
                                        direction={["column", "row"]}
                                    >
                                        <Stack flex="0.8" pr={10}>
                                            <Badge
                                                mb={1}
                                                fontSize="xs"
                                                letterSpacing="wide"
                                                colorScheme="gray"
                                                fontWeight="medium"
                                                rounded="full"
                                                px={4}
                                                py={1}
                                                w="fit-content"
                                            >
                                                Promo & Diskon
                                            </Badge>
                                            <Text textAlign="left">
                                                Yuk gabung di <chakra.span fontWeight="bold">Live Tiktok</chakra.span> kami,
                                                ada diskon loh untuk setiap pembelian tertentu melalui siaran langsung, ayok meluncur.
                                            </Text>
                                        </Stack>
                                        <Link
                                            w={["full", "auto"]}
                                            display="inline-flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            px={5}
                                            py={3}
                                            mt={[5, 0]}
                                            border="solid transparent"
                                            fontWeight="semibold"
                                            rounded="md"
                                            shadow="md"
                                            h="fit-content"
                                            color="brand.600"
                                            _dark={{ bg: "gray.900", color: "white" }}
                                            bg="gray.200"
                                            _hover={{
                                                bg: "brand.50",
                                                _dark: { bg: "gray.800" },
                                            }}
                                            flex="0.2"
                                            href='https://tiktok.com/@mobekal'
                                            target='_blank'
                                        >
                                            Follow Tiktok
                                        </Link>
                                    </Flex>
                                </MotionScroll>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Pricing