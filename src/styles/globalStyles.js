import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after, {
    box-sizing: inherits;
  }

body {
    background-color: var(--white);
    font-size: 1rem;
}

img {
    max-width: 100%;
  }

.gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }
`
