import React from "react";
import { GlobalStyles } from "../styles/globalStyles";
import Nav from "./Nav";
import styled from "styled-components";

const SiteBorderStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: clamp(5px, 1vw, 25px);

  border: 1px solid black;
`

export default function Layout({pageTitle, children}) {
    return (
        <>
        <GlobalStyles />
        <SiteBorderStyles>
            <Nav />
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </SiteBorderStyles>
        </>
    )
}