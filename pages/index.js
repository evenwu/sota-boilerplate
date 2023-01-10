import Layout from '../components/_layout'
import LayoutNested from '../components/_layout-nested'

import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>This is Home page 這是首頁</title>
      </Head>
      <div className="page-index px-4">
        <h1 className="mb-5 text-lg font-semibold">這裡是 index.js 的網頁內容 666</h1>
        <Image
          className="my-5 h-auto w-[200px]"
          src="/next.svg"
          width="394"
          height="80"
          alt="nextjs logo"
        />
        這個專案包含了：
        <ul
          className="
          ml-3
          list-inside list-disc
        ">
          <li>nextjs</li>
          <li>tailwindcss with all first party plugins</li>
          <li>layout example</li>
          <li>component example</li>
          <li>github pages support</li>
          <li>prettier and settings, vscode extenstion recommendations</li>
        </ul>
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      <LayoutNested>{page}</LayoutNested>
    </Layout>
  )
}
