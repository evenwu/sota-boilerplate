import Layout from '../components/_layout'
import LayoutNested from '../components/_layout-nested'

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
      <LayoutNested>{page}</LayoutNested>
    </Layout>
  )
}
