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

type Variant = {
  id: string;
  name: string;
  color: string;
}

type CardProductProps = {
  title: string;
  description: string;
  url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  img_url: string;
  variants: Array<Variant>;
};


function CardProduct({ title, description, language, img_url, variants }: CardProductProps) {

  return (
    <Box
      py={2}
      px={2.5}
      rounded="xl"
      borderWidth="1px"
      bg={useColorModeValue('white', 'gray.800')}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      _hover={{
        shadow: 'lg',
        textDecoration: 'none'
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
        alt={title}
      />
      <VStack overflow="hidden" align="start" spacing={1}>
        <VStack spacing={1} align="start" w="100%">
          <Flex
            justifyContent="space-between"
            width="100%"
          >
            <Tooltip hasArrow label="Github link" placement="top">
              <HStack cursor="pointer">
                <Icon as={ImSpoonKnife} boxSize="0.9em" mt="1px" />
                <Text fontSize="sm" colorScheme='secondary' noOfLines={1} fontWeight="600" align="left">
                  {title}
                </Text>
              </HStack>
            </Tooltip>
          </Flex>
          <HStack spacing={1}>
            {variants?.map((variant, index) => (
              <Tag key={index} size="sm" bg={variant.color} color='white'>
                <Text fontSize={['0.6rem']}>{variant.name}</Text>
              </Tag>
            ))}
          </HStack>
        </VStack>
        <Box pt={2}>
          <Text color="gray.500" fontSize="xs" noOfLines={2} lineHeight={4} textAlign="left">
            {description}
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}

export default CardProduct;