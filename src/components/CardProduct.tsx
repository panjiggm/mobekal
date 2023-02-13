import {
  Box,
  useColorModeValue,
  VStack,
  Text,
  HStack,
  Tag,
  Icon,
  Flex,
  Tooltip,
  Image
} from '@chakra-ui/react';
import { ImSpoonKnife } from 'react-icons/im';
import { AiFillLike } from 'react-icons/ai';
import { CardProductProps } from 'types';
import { MotionScroll } from '@/utils/motion';


function CardProduct({ name, variants, description, img_url }: CardProductProps) {

  return (
    <MotionScroll>
      <Box
        py={2}
        px={2.5}
        rounded="xl"
        borderWidth="1px"
        bg={useColorModeValue('white', 'gray.800')}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        _hover={{
          shadow: 'lg',
          textDecoration: 'none',
          cursor: 'pointer'
        }}
        display='flex'
        alignItems='center'
        gap={4}
      >
        <Image
          rounded={'lg'}
          height={85}
          width={85}
          src={img_url}
          alt={name}
        />
        <Tooltip hasArrow label={<Icon as={AiFillLike} boxSize="0.9em" mt="1px" />} placement="top">
          <VStack overflow="hidden" align="start" spacing={1}>
            <VStack spacing={1} align="start" w="100%">
              <Flex
                justifyContent="space-between"
                width="100%"
              >
                <HStack cursor="pointer">
                  <Icon as={ImSpoonKnife} boxSize="0.9em" mt="1px" />
                  <Text fontSize="sm" colorScheme='secondary' noOfLines={1} fontWeight="600" align="left">
                    {name}
                  </Text>
                </HStack>
              </Flex>
              <HStack spacing={1}>
                {variants?.map((variant, index) => {
                  let bgColor = '#a1a1a1'

                  switch (variant) {
                    case 'Original':
                      bgColor = '#a1a1a1';
                      break;
                    case 'Balado':
                      bgColor = '#e58e26';
                      break;
                    case 'Pedas':
                      bgColor = '#e55039';
                      break;
                    default:
                      bgColor = '#a1a1a1'
                      break;
                  }

                  return (
                    <Tag key={index} size="sm" bg={bgColor} color='white'>
                      <Text fontSize={['0.6rem']}>{variant}</Text>
                    </Tag>
                  )
                })}
              </HStack>
            </VStack>
            <Box pt={2}>
              <Text color="gray.500" fontSize="xs" noOfLines={2} lineHeight={4} textAlign="left">
                {description}
              </Text>
            </Box>

          </VStack>
        </Tooltip>
      </Box>
    </MotionScroll>
  );
}

export default CardProduct;