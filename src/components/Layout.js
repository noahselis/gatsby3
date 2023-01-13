import * as React from 'react'
import GlobalStyles from '../styles/GlobalStyles.js'
import { Typography } from '../styles/Typography'
import Nav from './Nav'
import styled from 'styled-components'
import Footer from './Footer'

const SiteBorderStyles = styled.div`
  max-width: 1400px;
  margin: 2rem auto;
  padding: clamp(5px, 1vw, 25px);

  border: 1px solid black;
`

export default function Layout({ pageTitle, children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <Nav />
        <main>
          <h1>{pageTitle}</h1>
          {children}
        </main>
        <Footer />
      </SiteBorderStyles>
    </>
  )
}
