import { MainFooter, MainFooterCopyright, MainFooterIcon } from './styled'

const Footer = () => (
  <MainFooter>
    <MainFooterIcon className="material-icons copyright">
      copyright
    </MainFooterIcon>
    <MainFooterCopyright>
      copyright 2022 - todos os direitos reservados - 3Telas Estúdios
    </MainFooterCopyright>
  </MainFooter>
)

export default Footer
