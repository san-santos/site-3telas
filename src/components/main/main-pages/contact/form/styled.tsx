import styled from 'styled-components'

/*### PÁGINA CONTATO FORMULÁRIO ###*/
export const Container = styled.div`
  height: auto;
  width: 40%;
  display: flex;
  flex-direction: column;
`
export const TitlePage = styled.h1`
  width: 100%;
  margin-bottom: 10px;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  letter-spacing: 1.2px;
`
export const TextLabel = styled.label`
  color: #000;
  font-size: 12px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 1.2px;
`
export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`
export const FieldStyled = styled.input`
  height: 30px;
  padding-left: 5px;
  margin-top: 2px;
  margin-bottom: 5px;
  border-radius: 5px;
  border: solid 1px;
`
export const SelectStyled = styled.select`
  height: 30px;
  padding-left: 5px;
  margin-top: 2px;
  margin-bottom: 5px;
  border-radius: 5px;
  border: solid 1px;
`
export const StyledTextArea = styled.textarea`
  height: 85px;
  padding: 5px;
  border-radius: 5px;
  border: solid 1px;
`
export const Button = styled.button`
  height: 40px;
  border-radius: 5px;
  margin-top: 25px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1.2px;
  background-color: #31308d;
  color: #fff;
`

export const ErrorStyled = styled.div`
  font-size: 12px;
  letter-spacing: 1.2px;
  color: red;
`
