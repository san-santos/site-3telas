import { MainMenu, LogoHeader, MainLinksMenu, ButtonLink } from '../styled'
import SocialMedia from '../Social'
import Link from 'next/link'

const NavBar = () => {
  return (
    <MainMenu>
      <LogoHeader />
      <MainLinksMenu>
        <Link href="/#home">
          <ButtonLink>Home</ButtonLink>
        </Link>
        <Link href="/#3telas">
          <ButtonLink>3Telas</ButtonLink>
        </Link>
        <Link href="/#services">
          <ButtonLink>Serviços</ButtonLink>
        </Link>
        <Link href="/#studios">
          <ButtonLink>Estúdios</ButtonLink>
        </Link>
        <Link href="/#values">
          <ButtonLink>Valores</ButtonLink>
        </Link>
        <Link href="/#contact">
          <ButtonLink>Contato</ButtonLink>
        </Link>
      </MainLinksMenu>
      <SocialMedia />
    </MainMenu>
  )
}

export default NavBar
