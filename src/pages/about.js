import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function AboutPage() {
  return (
    <Layout>
      <h1>About Page!</h1>
      <Link to='/'>Home</Link>
    </Layout>
  )
}

export const Head = () => <Seo title={'Aboot'} />