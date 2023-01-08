import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProfilePic from '../components/ProfilePic'
import Seo from '../components/Seo'

export default function AboutPage() {
  console.log("💩")
  return (
    <Layout>
      <h1>About Page!</h1>
      <ProfilePic />
      <Link to="/">Home</Link>
    </Layout>
  )
}

// export const query = graphql`
//   query {

//   }
// `

export const Head = () => <Seo title={'Aboot'} />
