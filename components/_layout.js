import localFont from 'next/font/local'

const inter = localFont({
  src: '../public/fonts/Inter-roman.latin.var.woff2',
  variable: '--font-inter',
})

import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'
import Seo from './seo'

export default function Layout({children}) {
  return (
    <>
      <Seo />
      <Head>
        <title>Site Name</title>
        <meta name="description" content="Site Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${inter.variable} page p-8 font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
