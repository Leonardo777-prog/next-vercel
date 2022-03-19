import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement } from 'react'
import '../styles/globals.css'

type NextPageWhitLayout = NextPage & {
  getLayout?: (page: ReactElement) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWhitLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page)

  // return 
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
