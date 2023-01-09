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
      <div class="page-index px-4">
        <h1 class="my-5 text-lg font-semibold">這裡是網頁內容 666</h1>
        <Image class="h-auto w-[200px]" src="/next.svg" width="394" height="80" alt="nextjs logo" />
        <ul
          class="
          my-5 ml-3
          list-inside list-disc
        ">
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
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}
