import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import styled from 'styled-components'


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
