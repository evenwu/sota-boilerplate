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
      <div className='page-index px-4'>
        <h1 className='my-5 font-semibold text-lg'>這裡是網頁內容 666</h1>
        <Image className='w-[200px] h-auto' src='/next.svg' width='394' height='80' alt='nextjs logo' />
        <ul className='list-disc list-inside ml-3 my-5'>
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
