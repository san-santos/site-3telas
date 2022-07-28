import { MainMenu, LogoHeader, MainLinksMenu, ButtonLink } from '../styled'
import SocialMedia from '../Social'
import Link from 'next/link'
import { useState } from 'react'

const NavBar = () => {
  const [home, setHome] = useState(false)
  const [history, setHistory] = useState(false)
  const [services, setServices] = useState(false)
  const [studios, setStudios] = useState(false)
  const [values, setValues] = useState(false)
  const [contact, setContact] = useState(false)

  return (
    <MainMenu>
      <LogoHeader />
      <MainLinksMenu>
        <Link href="/#home">
          <ButtonLink
            onClick={() => (
              setHome(true),
              setHistory(false),
              setServices(false),
              setStudios(false),
              setValues(false),
              setContact(false)
            )}
            style={{ color: home ? '#0f0' : '#fff' }}
          >
            Home
          </ButtonLink>
        </Link>
        <Link href="/#3telas">
          <ButtonLink
            onClick={() => (
              setHistory(true),
              setHome(false),
              setServices(false),
              setStudios(false),
              setValues(false),
              setContact(false)
            )}
            style={{ color: history ? '#0f0' : '#fff' }}
          >
            3Telas
          </ButtonLink>
        </Link>
        <Link href="/#services">
          <ButtonLink
            onClick={() => (
              setServices(true),
              setHome(false),
              setHistory(false),
              setStudios(false),
              setValues(false),
              setContact(false)
            )}
            style={{ color: services ? '#0f0' : '#fff' }}
          >
            Serviços
          </ButtonLink>
        </Link>
        <Link href="/#studios">
          <ButtonLink
            onClick={() => (
              setStudios(true),
              setHome(false),
              setHistory(false),
              setServices(false),
              setValues(false),
              setContact(false)
            )}
            style={{ color: studios ? '#0f0' : '#fff' }}
          >
            Estúdios
          </ButtonLink>
        </Link>
        <Link href="/#values">
          <ButtonLink
            onClick={() => (
              setValues(true),
              setHome(false),
              setHistory(false),
              setServices(false),
              setStudios(false),
              setContact(false)
            )}
            style={{ color: values ? '#0f0' : '#fff' }}
          >
            Valores
          </ButtonLink>
        </Link>
        <Link href="/#contact">
          <ButtonLink
            onClick={() => (
              setContact(true),
              setHome(false),
              setHistory(false),
              setServices(false),
              setStudios(false),
              setValues(false)
            )}
            style={{ color: contact ? '#0f0' : '#fff' }}
          >
            Contato
          </ButtonLink>
        </Link>
      </MainLinksMenu>
      <SocialMedia />
    </MainMenu>
  )
}

export default NavBar
