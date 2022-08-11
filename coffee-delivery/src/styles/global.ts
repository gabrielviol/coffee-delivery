import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif; 
    font-size: 0.875rem;
    background-color: '#FAFAFA';
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  input, button {
    font-family: 'Roboto', sans-serif;
  }
`

export const Sizes = {
    small: "(max-width: 768px)",
    medium: "(min-width: 768px) and (max-width: 1280px)"
  }