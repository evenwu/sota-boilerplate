import Layout from '../components/_layout'
import NestedLayout from '../components/_nested-layout'

export default function Page() {
  return (
    <>
      <h1>About page</h1>
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
