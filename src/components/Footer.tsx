import Image from 'next/image';
import Link from 'next/link';
import {
    Box,
    Stack,
    HStack,
    VStack,
    Divider,
    Text,
    Button,
    LinkProps
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaInstagram, FaTiktok } from 'react-icons/fa';
// import { BsDiscord } from 'react-icons/bs';

const Footer = () => {
    return (
        <Box bg='#f5f5f5' _dark={{ bg: "gray.600" }} mt={20}>
            <Box p={{ base: 5, md: 8 }} maxW="5xl" marginInline="auto">
                <Stack
                    // spacing={{ base: 8, md: 0 }}
                    justifyContent="space-between"
                    direction={{ base: 'column', md: 'row' }}
                >
                    <Box maxW="350px">
                        <Image src="/logo.svg" width={130} height={50} alt="Logo Mobekal" priority />
                        <Text mt={2} color="gray.600" _dark={{ color: 'gray.200' }} fontSize="md" fontWeight='semibold'>
                            Solusi teman bekal kamu dengan harga murah, rasa yang enak dan praktis
                        </Text>
                    </Box>
                    <HStack
                        spacing={{ base: 8, lg: 16 }}
                        display={{ base: 'none', sm: 'flex' }}
                        justifyContent={{ sm: 'space-between', md: 'normal' }}
                    >
                        <VStack spacing={4} alignItems="flex-start">
                            <Text fontSize="md" fontWeight="bold">
                                Site
                            </Text>
                            <VStack spacing={2} alignItems="flex-start" color="gray.500" _dark={{ color: "white" }}>
                                <CustomLink target='' link='/'>Home</CustomLink>
                                <CustomLink target='' link='/about'>About</CustomLink>
                                <CustomLink target='' link='/menu'>Menu</CustomLink>
                            </VStack>
                        </VStack>
                        <VStack spacing={4} alignItems="flex-start">
                            <Text fontSize="md" fontWeight="bold">
                                Best Product
                            </Text>
                            <VStack spacing={2} alignItems="flex-start" color="gray.500" _dark={{ color: "white" }}>
                                <CustomLink target='' link='#'>Mustofa Talas</CustomLink>
                                <CustomLink target='' link='#'>Orek Tempe</CustomLink>
                                <CustomLink target='' link='#'>Udang Rebon</CustomLink>
                            </VStack>
                        </VStack>
                        <VStack spacing={4} alignItems="flex-start">
                            <Text fontSize="md" fontWeight="bold">
                                Other
                            </Text>
                            <VStack spacing={2} alignItems="flex-start" color="gray.500" _dark={{ color: "white" }}>
                                <CustomLink target='_blank' link='https://shopee.co.id/mobekal'>Shopee</CustomLink>
                                <CustomLink target='_blank' link='#'>Whatsapp</CustomLink>
                                <CustomLink target='_blank' link='https://trakteer.id/mobekal'>Trakteer</CustomLink>
                            </VStack>
                        </VStack>
                    </HStack>
                </Stack>

                <Divider my={4} />

                <Stack direction={{ base: 'column', md: 'row' }} spacing={3} justifyContent="space-between">
                    <Text fontSize="sm">
                        Made with 💖 by{' '}
                        <Link
                            href="https://panjiggm.com"
                            style={{ textDecoration: 'underline' }}
                            target="_blank"
                        >
                            panjiggm
                        </Link>
                    </Text>
                    <Stack spacing={2} direction={{ base: 'column', md: 'row' }}>
                        <Link href="https://instagram.com/mobekal" target='_blank'>
                            <Button leftIcon={<FaInstagram />} rounded="md" colorScheme="gray">
                                mobekal
                            </Button>
                        </Link>
                        <Link href="https://tiktok.com/mobekal" target='_blank'>
                            <Button
                                leftIcon={<FaTiktok />}
                                rounded="md"
                                colorScheme="gray"
                            >
                                mobekal
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
};

const CustomLink = ({ children, link, target }: { link: string, target: string, children: React.ReactNode }) => {
    return (
        <Link href={link} target={target} style={{ textDecoration: 'underline' }}>
            {children}
        </Link>
    );
};

export default Footer;