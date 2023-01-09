import '../styles/globals.css'
import localFont from '@next/font/local'

// Font files can be colocated inside of `pages`
const myFont = localFont({src: '../public/fonts/Inter-roman.latin.var.woff2'})

export default function MyApp({Component, pageProps}) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
