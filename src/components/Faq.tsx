import { MotionScroll } from "@/utils/motion"
import { Container, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from "@chakra-ui/react"

const Faq = () => {
    return (
        <Container maxW="3xl" p={{ base: 5, md: 12 }} pb={24}>
            <MotionScroll>
                <Box w='full' display='flex' flexDirection='column' alignItems='center'>
                    <Text
                        fontSize={["lg", "xl"]}
                        color="primary"
                        textTransform="uppercase"
                        fontWeight="semibold"
                        mb={2}
                    >
                        FAQ
                    </Text>
                    <Text mb={[6, 8, 12]} fontSize={["md", "lg", "xl"]} colorScheme="secondary">
                        Pertanyaan yang sering diajukan
                    </Text>
                </Box>
            </MotionScroll>
            <MotionScroll>
                <Accordion allowToggle>
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index}>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Text color='primary' fontSize='sm' fontWeight='bold'>
                                            {faq.question}
                                        </Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text colorScheme='secondary' fontWeight='light'>
                                    {faq.answer}
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </MotionScroll>
        </Container>
    )
}

export default Faq

const faqs = [
    {
        question: "Apakah MOBEKAL bisa dikirim ke seluruh Indonesia?",
        answer: "Mobekal bisa dikirim ke seluruh daerah di Indonesia (sesuai jangkauan pihak ekspedisi)."
    },
    {
        question: "Pengiriman dari mana?",
        answer: "Pengiriman dari Tangerang, Banten."
    },
    {
        question: "Apakah menu MOBEKAL tahan lama?",
        answer: "Menu yang dibuat oleh kami memiliki ketahanan hingga 2 bulan, karna terdapat bahan yang dapat mengawetkan makanan secara alami, salah satu contohnya Asam Jawa."
    },
    {
        question: "Apakah semua menu warteg akan hadir di MOBEKAL?",
        answer: "Tentunya kami sangat ingin menyediakan semua menu Warteg, namun tidak semua menu Warteg bisa bertahan lama, terutama menu yang bersifat basah atau berkuah. Jadi kami hanya menyediakan menu Warteg yang sifatnya kering sehingga bisa tahan lebih lama."
    }
]