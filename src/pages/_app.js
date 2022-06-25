import NextNProgress from 'nextjs-progressbar'

import '../styles/globals.scss'

import Layouts from '../components/Layouts'

function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <NextNProgress color="#000" height={2} />
      <Component {...pageProps} />
    </Layouts>
  )
}

export default MyApp
