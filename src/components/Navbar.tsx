import Link from 'next/link';
import Image from 'next/image';
import {
  Box,
  Flex,
  Button,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box px={{ base: 4, sm: 14, md: 36 }}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Link href='/'>
              <Image src="/logo.svg" width={130} height={50} alt="Logo Mobekal" priority />
            </Link>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}