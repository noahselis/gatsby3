import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function ProductsPage() {
  console.log("💩")
  return (
    <Layout>
      <h1>Products Page!</h1>
      <Link to="/">home</Link>
    </Layout>
  )
}

export const Head = () => <Seo title={'Products'} />

// export const query = graphql`
//   query productsPage {
//   }
// `
