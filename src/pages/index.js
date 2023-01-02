import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Seo from '../components/Seo'

const HomeStyles = styled.main`
  .gatsby-image-wrapper {
    width: 300px;
  }
`

export default function HomePage() {
  return (
    <Layout>
      <HomeStyles>
        <StaticImage
          alt="Clifford, a reddish brown pitbull, posing on a couch"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
      </HomeStyles>
    </Layout>
  )
}

export const Head = () => <Seo title={'Homepage'} />
