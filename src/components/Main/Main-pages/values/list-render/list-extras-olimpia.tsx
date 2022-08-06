import { useState } from 'react'
import { ListValuesExtras, ListColumnExtras, ListText, Title } from './styled'

const ListExtrasOlimpia = () => {
  const selecServico = [
    'Gravação de Podcast e Vídeocast',
    'Live Vídeocast',
    'Serviços Extras'
  ]
  const [gravacao] = useState([
    'Pacote 2 horas - R$1.000,00',
    'Pacote 4 horas - R$1.800,00',
    'Pacote 8 horas - R$2.600,00',
    'Pacote 2 horas mensais (1 dia/mês) - R$900,00',
    'Pacote 2 horas quinzena (2 dia/mês) - R$1.600,00',
    'Pacote 2 horas semanais (4 dia/mês) - R$2.800,00'
  ])
  const [live] = useState([
    'Pacote 2 horas - R$1.400,00',
    'Pacote 4 horas - R$2.520,00',
    'Pacote 8 horas - R$3.640,00',
    'Pacote 2 horas mensais (1 dia/mês) - R$1.400,00',
    'Pacote 2 horas quinzena (2 dia/mês) - R$2.240,00',
    'Pacote 2 horas semanais (4 dia/mês) - R$3.920,00'
  ])
  const [servicos] = useState(['Link Dedicado - R$950,00'])
  return (
    <ListValuesExtras>
      <ListColumnExtras>
        <Title>{selecServico.slice(0, 1)}</Title>
        {gravacao.map((item) => (
          <ListText key={item}>{item}</ListText>
        ))}
      </ListColumnExtras>
      <ListColumnExtras>
        <Title>{selecServico.slice(1, 2)}</Title>
        {live.map((item) => (
          <ListText key={item}>{item}</ListText>
        ))}
      </ListColumnExtras>
      <ListColumnExtras>
        <Title>{selecServico.slice(2, 3)}</Title>
        {servicos.map((item) => (
          <ListText key={item}>{item}</ListText>
        ))}
      </ListColumnExtras>
    </ListValuesExtras>
  )
}

export default ListExtrasOlimpia
