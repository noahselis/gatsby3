import * as React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Seo from '../components/Seo'
import { graphql } from 'gatsby'

const HeroGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);

  .gatsby-image-wrapper {
    object-fit: cover;
    width: 100%;

  }

  .hero {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    z-index: 0;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  h1 {
    text-align: center;
    grid-column 5 / 9;
    grid-row-end: 6;
    z-index: 1;
    color: var(--white);
    border: 3px solid black;
  }  
  button {
    text-align: center;
    grid-column 5 / 9;
    grid-row-end: 8;
    z-index: 1;
    color: var(--white);
    border: 3px solid black;
  }  
`

export default function HomePage({ data }) {
  console.log({ data })
  const hero = data.wpPage.homePageSections.heroSection[0].backgroundImage
  const btn = data.wpPage.homePageSections
  const btnClr = data.wpPage.homePageSections
  console.log({ hero })
  return (
    <Layout>
      <HeroGrid>
        <div className="hero">
          <img src={hero.sourceUrl} alt={hero.altText} />
        </div>
        <h1>Home Page!</h1>
        <button style={{backgroundColor: btnClr.buttonColor}}>{btn.buttonText}???</button>
      </HeroGrid>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    wpPage(uri: { eq: "/home-page/" }) {
      title
      homePageSections {
        fieldGroupName
        heroSection {
          __typename
          ... on WpPage_Homepagesections_HeroSection_Hero {
            backgroundImage {
              altText
              sourceUrl
            }
            heroText
          }
        }
        buttonText
        buttonColor
      }
    }
  }
`

export const Head = () => <Seo title={'Homepage'} />
