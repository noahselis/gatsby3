import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function ContactPage() {
  return (
    <Layout>
      <h1>Contact Page!</h1>
      <Link to='/'>home</Link>
    </Layout>
  )
}

export const Head = () => <Seo title={'Contact'} />