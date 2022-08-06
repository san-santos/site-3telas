import { useState } from 'react'
import { ListValues, ListColumn, ListText, Title } from './styled'

const ListVilaOlimpia = () => {
  const selectStudio = [
    'Estúdio - 1',
    'Estúdio - 4',
    'Estúdio - A',
    'Estúdio - B'
  ]
  const [studio1] = useState([
    'Diária de 4h - R$990,00',
    'Diária de 8h - R$1.390,00',
    'Diária de 12h - R$1.790,00',
    'Hora extra - R$250,00'
  ])
  const [studio4] = useState([
    'Diária de 4h - R$650,00',
    'Diária de 8h - R$850,00',
    'Diária de 12h - R$1.050,00',
    'Hora extra - R$200,00'
  ])
  const [studioA] = useState([
    'Diária de 4h - R$1.190,00',
    'Diária de 8h - R$1.690,00',
    'Diária de 12h - R$1.990,00',
    'Hora extra - R$300,00'
  ])
  const [studioB] = useState([
    'Diária de 4h - R$990,00',
    'Diária de 8h - R$1.390,00',
    'Diária de 12h - R$1.790,00',
    'Hora extra - R$250,00'
  ])

  return (
    <ListValues>
      <ListColumn>
        <Title>{selectStudio.slice(0, 1)}</Title>
        {studio1.map((item, i) => (
          <ListText key={i}>{item}</ListText>
        ))}
      </ListColumn>
      <ListColumn>
        <Title>{selectStudio.slice(1, 2)}</Title>
        {studio4.map((item, i) => (
          <ListText key={i}>{item}</ListText>
        ))}
      </ListColumn>
      <ListColumn>
        <Title>{selectStudio.slice(2, 3)}</Title>
        {studioA.map((item, i) => (
          <ListText key={i}>{item}</ListText>
        ))}
      </ListColumn>
      <ListColumn>
        <Title>{selectStudio.slice(3, 4)}</Title>
        {studioB.map((item, i) => (
          <ListText key={i}>{item}</ListText>
        ))}
      </ListColumn>
    </ListValues>
  )
}

export default ListVilaOlimpia
