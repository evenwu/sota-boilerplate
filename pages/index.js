import MainLayout from '../components/_main-layout'
import NestedLayout from '../components/_nested-layout'

import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <em>SOTA Template</em>
      <ul>
        <li>nextjs</li>
        <li>tailwindcss with all plugins</li>
        <li>layout example</li>
        <li>component example</li>
        <li>github pages support</li>
      </ul>
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <NestedLayout>
        {page}
      </NestedLayout>
    </MainLayout>
  )
}
