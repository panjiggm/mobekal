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
                            <Box w="full" px={[2, 4]} mx="auto">
                                <chakra.p
                                    fontSize={["lg", "xl"]}
                                    color="gray.100"
                                    textTransform="uppercase"
                                    fontWeight="semibold"
                                >
                                    Harga
                                </chakra.p>
                                <Text
                                    mb={2}
                                    fontSize={["2xl", "5xl"]}
                                    fontWeight="bold"
                                    lineHeight="tight"
                                    color="white"
                                >
                                    Harga yang pas untuk Kamu, siapapun Kamu
                                </Text>
                                <chakra.p mb={6} fontSize={["lg", "xl"]} color="gray.200">
                                    Our plans scale for any organization—from startups to Fortune
                                    500s.
                                </chakra.p>
                            </Box>
                            <Box>
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
                                                    Small
                                                </Badge>
                                                <Text
                                                    mb={2}
                                                    fontSize="5xl"
                                                    fontWeight={["bold", "extrabold"]}
                                                    color="gray.900"
                                                    _dark={{ color: "gray.50" }}
                                                    lineHeight="tight"
                                                >
                                                    Rp3k
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
                                                    One plan for any organization—from startups to Fortune
                                                    500s. We offer 50% off of for all students and
                                                    universities. Please get in touch with us and provide
                                                    proof of your status.
                                                </chakra.p>
                                            </Box>
                                            <Flex
                                                px={10}
                                                pt={5}
                                                pb={10}
                                                direction="column"
                                                bg="gray.50"
                                                _dark={{ bg: "gray.900" }}
                                                roundedBottom="md"
                                            >
                                                <Stack mb={5} spacing={4}>
                                                    <Feature>Granular access controls</Feature>
                                                    <Feature>Custom components</Feature>
                                                    <Feature>Deploy on-premises</Feature>
                                                    <Feature>Identity management</Feature>
                                                </Stack>
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
                                                    bg="gray.800"
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
                                                    Big
                                                </Badge>
                                                <Text
                                                    mb={2}
                                                    fontSize="5xl"
                                                    fontWeight={["bold", "extrabold"]}
                                                    color="gray.900"
                                                    _dark={{ color: "gray.50" }}
                                                    lineHeight="tight"
                                                >
                                                    Rp16k
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
                                                    One plan for any organization—from startups to Fortune
                                                    500s. We offer 50% off of for all students and
                                                    universities. Please get in touch with us and provide
                                                    proof of your status.
                                                </chakra.p>
                                            </Box>
                                            <Flex
                                                px={10}
                                                pt={5}
                                                pb={10}
                                                direction="column"
                                                bg="gray.50"
                                                _dark={{ bg: "gray.900" }}
                                                roundedBottom="md"
                                            >
                                                <Stack mb={5} spacing={4}>
                                                    <Feature>Granular access controls</Feature>
                                                    <Feature>Custom components</Feature>
                                                    <Feature>Deploy on-premises</Feature>
                                                    <Feature>Identity management</Feature>
                                                </Stack>
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
                                                    bg="gray.800"
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
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Pricing