import {
  Container,
  TitlePage,
  ContentContact,
  InfoContente,
  TextInfo,
  IconInfo,
  Map
} from './styled'
import FormValidation from '../form'
import { FaWhatsapp, FaRegEnvelope, FaSearchLocation } from 'react-icons/fa'

const ContactContent = () => {
  return (
    <Container>
      <TitlePage>Entre em contato</TitlePage>
      <ContentContact>
        <InfoContente>
          <IconInfo>
            <FaWhatsapp size="22px" />
            <TextInfo>11 9 9137-2212</TextInfo>
          </IconInfo>
          <IconInfo>
            <FaRegEnvelope size="20px" />
            <TextInfo>estudio@3telas.com.br</TextInfo>
          </IconInfo>
          <IconInfo>
            <FaSearchLocation size="20px" />
            <TextInfo>
              Vila Olimpia - Rua Santa Justina, 569/577 - 04545-042
            </TextInfo>
          </IconInfo>
          <Map
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.235347446825!2d-
          46.68063908518786!3d-23.595891084665716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1
          !3m3!1m2!1s0x94ce575197313751%3A0xeb7c1cdc0810ad0b!2zMyBUZWxhcyBDb211bmljYcOnw6Nv
          !5e0!3m2!1spt-PT!2sbr!4v1621640748477!5m2!1spt-PT!2sbr"
            width="555"
            height="250"
            loading="lazy"
          ></Map>
        </InfoContente>
        <FormValidation />
      </ContentContact>
    </Container>
  )
}

export default ContactContent
