import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Poppins } from '@next/font/google'

import { myTheme } from "../styles/theme"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <ChakraProvider theme={myTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  )
}
