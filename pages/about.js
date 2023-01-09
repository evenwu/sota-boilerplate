import Layout from '../components/_layout'
import LayoutAbout from '../components/_layout-about'

export default function Page() {
  return (
    <>
      <h1 className="mb-5 text-lg font-semibold">About page</h1>
      <p className="text-fuchsia-204 w-fit rounded-full bg-sky-200 px-3 py-1 text-sky-700">
        要注意的是 layout 也有改變了
      </p>
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      <LayoutAbout>{page}</LayoutAbout>
    </Layout>
  )
}
