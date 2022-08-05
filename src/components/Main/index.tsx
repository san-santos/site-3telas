import HomePage from './main-pages/main-home'
import History from './main-pages/main-history'
import Services from './main-pages/main-services'
import Studios from './main-pages/main-studios'
import Values from './main-pages/table-values/main-values'
import Contact from './main-pages/main-contact'
import { MainContainer, MainHtml, MainBanner } from '../../components/styled'

const Main = () => (
  <MainHtml>
    <MainBanner />
    <MainContainer>
      <HomePage />
      <History />
      <Services />
      <Studios />
      <Values />
      <Contact />
    </MainContainer>
  </MainHtml>
)
export default Main
