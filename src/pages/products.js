import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import styled from 'styled-components'

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-content: space-between;
  p {
    margin: 0;
    height: fit-content;
    align-self: center;
    justify-self: center;
    width: 80%;
  }
  img {
    width: 80%;
    margin: 2rem 0;
    justify-self: center;
  }
`

export default function ProductsPage({ data }) {
  console.log({ data })
  const boxTop = data.wpPage.imgLeftTextRight
  console.log({ boxTop })
  return (
    <Layout>
      <h1>Products Page!</h1>
      <Box>
        <p>{boxTop.text}</p>
        <img src={boxTop.image.sourceUrl} />
      </Box>
      <Link to="/">home</Link>
    </Layout>
  )
}

export const Head = () => <Seo title={'Products'} />

export const query = graphql`
  query productsPage {
    wpPage {
      imgLeftTextRight {
        fieldGroupName
        text
        image {
          altText
          id
          sourceUrl
        }
      }
    }
  }
`
