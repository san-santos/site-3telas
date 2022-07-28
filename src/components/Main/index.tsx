import HomePage from './Main-pages/Main-home'
import History from './Main-pages/Main-history'
import Services from './Main-pages/Main-services'
import Studios from './Main-pages/Main-studios'
import Values from './Main-pages/Main-values'
import Contact from './Main-pages/Main-contact'
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
