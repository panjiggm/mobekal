import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { myTheme } from "../styles/theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
