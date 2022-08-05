import { ThemeProvider } from 'styled-components'
import { Header } from './Header';
import { Layout } from './styles';

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from './styles/themes/default';

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <Header />
        <h1>Hello</h1>
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  )
}