import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

export default function HomePage() {
  return (
    <Layout>
      <h1>Home Page!</h1>
      <StaticImage
      alt="Clifford, a reddish brown pitbull, posing on a couch"
      src='https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large'
      />
    </Layout>
  )
}

export const Head = () => <title>Home</title>