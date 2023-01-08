import Layout from '../components/_layout'
import NestedLayout from '../components/_nested-layout'

import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>This is Home page 這是首頁</title>
      </Head>
      <div className='border-2 border-stone-800 bg-stone-100'>
        <Image src='/next.svg' width='100' height='20' alt='nextjs logo' />
        <h1>SOTA Template</h1>
        <ul>
          <li>nextjs</li>
          <li>tailwindcss with all plugins</li>
          <li>layout example</li>
          <li>component example</li>
          <li>github pages support</li>
        </ul>
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>
        {page}
      </NestedLayout>
    </Layout>
  )
}
