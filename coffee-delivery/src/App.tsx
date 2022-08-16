import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router'
import { CartContextProvider } from './hooks/useCart';


import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from './styles/themes/default';



export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </CartContextProvider>
    </ThemeProvider>
  )
}