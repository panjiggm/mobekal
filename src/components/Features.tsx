import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Container } from '@chakra-ui/react';
import { IoLeaf } from 'react-icons/io5';
import { GiReceiveMoney, GiTongue, GiSchoolBag } from 'react-icons/gi';
import { MotionScroll } from '@/utils/motion';

interface FeatureProps {
    title: string;
    description: string;
    icon: ReactElement;
    colorIcon: string;
    bgIcon: string;
}

const Feature = ({ title, description, icon, colorIcon, bgIcon }: FeatureProps) => {
    return (
        <Stack>
            <Flex
                w='full'
                direction='column'
                align={'center'}
                justify={'center'}
                gap={4}
                mb={1}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    rounded='full'
                    color={colorIcon}
                    bg={bgIcon}
                    w={16}
                    h={16}>
                    {icon}
                </Box>
                <Text fontWeight={600}>{title}</Text>
                <Text textAlign='center' fontSize='sm' colorScheme='secondary'>{description}</Text>
            </Flex>
        </Stack>
    );
}

const Features = () => {
    return (
        <Container maxW={'5xl'} p={{ base: 5, md: 12 }} my={20}>
            <Box>
                <MotionScroll>
                    <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
                        <Feature
                            icon={<Icon as={GiReceiveMoney} w={10} h={10} />}
                            title={'Terjangkau'}
                            description="Murah abis! Mulai Rp2.000 aja, siapapun bisa beli!"
                            colorIcon="#B7791F"
                            bgIcon="#FEFCBF"
                        />
                        <Feature
                            icon={<Icon as={IoLeaf} w={10} h={10} />}
                            title={'Fresh'}
                            description="Menggunakan bahan-bahan segar yang baru beli dipasar"
                            colorIcon="#4B9A71"
                            bgIcon="#C6F6D5"
                        />
                        <Feature
                            icon={<Icon as={GiTongue} w={10} h={10} />}
                            title={'Enak'}
                            description="Kaya akan bumbu dan rempah, berani di adu soal rasa!"
                            colorIcon="#C53030"
                            bgIcon="#FED7D7"
                        />
                        <Feature
                            icon={<Icon as={GiSchoolBag} w={10} h={10} />}
                            title={'Praktis'}
                            description="Bisa dibawa kemanapun, cocok buat nemenin bekal"
                            colorIcon="#2B6CB0"
                            bgIcon="#BEE3F8"
                        />
                    </SimpleGrid>
                </MotionScroll>
            </Box>
        </Container>
    )
}

export default Features