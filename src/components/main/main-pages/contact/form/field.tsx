/* eslint-disable @typescript-eslint/no-explicit-any */
import { useField } from 'formik'
import { Key } from 'react'
import {
  TextLabel,
  FieldStyled,
  SelectStyled,
  StyledTextArea,
  ErrorStyled
} from './styled'

type InputProps = {
  component: any
  InputComponent: any
  label: string
  name: string
  id?: string | undefined
  validate?: (value: unknown) => undefined | string | Promise<unknown>
  type?: string
  multiple?: boolean
  value?: string
}

type SelectProps = {
  component: any
  SelectComponent: any
  options: any
  label: string
  name: string
  as: string
  id?: string | undefined
  type?: string
  multiple?: boolean
  key?: Key | null | undefined
  value?: string | number | readonly string[] | undefined
}

type TextAreaProps = {
  component: any
  TextAreaComponent: any
  label: string
  name: string
  id?: string | undefined
  type?: string
  multiple?: boolean
  value?: string
}

export const Field = ({
  label,
  component: InputComponent,
  ...props
}: InputProps) => {
  const [inputProps, meta] = useField(props.toString)
  const id = props.id || props.name
  return (
    <>
      {label && <TextLabel htmlFor={id}>{label}</TextLabel>}
      <InputComponent id={id} {...inputProps} {...props} />
      {meta.error && meta.touched && (
        <ErrorStyled>{meta.error.toString()}</ErrorStyled>
      )}
    </>
  )
}

export const Select = ({
  label,
  component: SelectComponent,
  options = ['Solicitar orçamento', 'Negociações', 'Outras informações'],
  ...props
}: SelectProps) => {
  const [selectProps] = useField(props.toString)
  const id = props.id || props.name
  return (
    <>
      {label && <TextLabel htmlFor={id}>{label}</TextLabel>}
      <SelectComponent id={id} {...selectProps} {...props} defaultValue="">
        <option disabled selected value="">
          Escolha o assunto
        </option>
        {options.map((option: any) => {
          return (
            <option key={option.toString()} value={option.value}>
              {option}
            </option>
          )
        })}
      </SelectComponent>
    </>
  )
}

export const TextArea = ({
  label,
  component: TextAreaComponent,
  ...props
}: TextAreaProps) => {
  const [TextAreaProps] = useField(props.toString)
  const id = props.id || props.name
  return (
    <>
      {label && <TextLabel htmlFor={id}>{label}</TextLabel>}
      <TextAreaComponent id={id} {...TextAreaProps} {...props} />
    </>
  )
}

Field.defaultProps = {
  component: FieldStyled
}

Select.defaultProps = {
  component: SelectStyled
}

TextArea.defaultProps = {
  component: StyledTextArea
}
