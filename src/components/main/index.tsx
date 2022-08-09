import HomePage from './main-pages/main-home'
import History from './main-pages/history/main-history'
import Services from './main-pages/weoffer/main-services'
import Studios from './main-pages/studios/main-studios'
import Values from './main-pages/values/main-values'
import Contact from './main-pages/contact/main-contact'
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
