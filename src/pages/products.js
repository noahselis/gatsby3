import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

export default function ProductsPage() {
  return (
    <Layout>
      <h1>Products Page!</h1>
      <Link to='/'>home</Link>
    </Layout>
  )
}

export const Head = () => <title>Products</title>