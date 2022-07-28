import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root{
--background: #000;
--primary:#f0f;
--secudary: #0f0;
--color: #222;
--font: 1.125rem;
--fontfamily: 'Roboto', sans-serif;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
  scroll-behavior: smooth;
}

section{
    scroll-margin-top: 95px;
  }

html, body, #__next{
  height: 100%
  var(--color)
  var(--font)
  var(--background)
  var(--fontfamily)
}

body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
}
`

export default GlobalStyles
