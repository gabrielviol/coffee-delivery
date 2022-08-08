import { ThemeProvider } from 'styled-components'
import { Header } from './Header';
import { Layout } from './styles/styles';

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from './styles/themes/default';
import { Intro } from './Intro';
import { CoffeeList } from './CoffeeList'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <Header />
        <Intro />
        <CoffeeList/>
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  )
}