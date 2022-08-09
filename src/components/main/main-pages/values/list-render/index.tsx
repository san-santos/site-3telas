import ListVilaOlimpia from './list-olimpia'
import ListExtrasOlimpia from './list-extras-olimpia'
import { Lists, Container, TitlePage, TextInfo, FooterSpace } from './styled'

const ListValues = () => {
  return (
    <>
      <Container>
        <TitlePage>Nossos preços</TitlePage>
        <TextInfo>
          Somos um dos principais estúdio chroma key de São Paulo, temos os
          melhores preços do mercado com flexibilidade na negociação, mantendo o
          nosso padrão de qualidade e atendimento.
        </TextInfo>
        <Lists>
          <ListVilaOlimpia />
          <ListExtrasOlimpia />
        </Lists>
      </Container>
      <FooterSpace />
    </>
  )
}

export default ListValues
