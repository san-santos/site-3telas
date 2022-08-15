import { Formik, ErrorMessage, Field, Form } from 'formik'
import schema from './schema'
import {
  Container,
  FormStyled,
  FieldStyled,
  SelectStyled,
  TitlePage,
  TextLabel,
  TextArea,
  Button
} from './styled'

const FormValidation = () => {
  return (
    <Container>
      <TitlePage>Formulário de contato</TitlePage>
      <Formik
        validateOnMount
        initialValues={{
          name: '',
          email: '',
          whatsapp: '',
          choice: '',
          mensage: ''
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log('ONSUBMIT', values)
        }}
      >
        {({ isValid }) => (
          <Form>
            <FormStyled>
              <TextLabel htmlFor="name">Nome</TextLabel>
              <Field component={FieldStyled} id="name" name="name" />
              <ErrorMessage name="name" />

              <TextLabel htmlFor="email">Email</TextLabel>
              <Field
                component={FieldStyled}
                id="email"
                name="email"
                type="email"
              />
              <ErrorMessage name="email" />

              <TextLabel htmlFor="whatsapp">Whatsapp</TextLabel>
              <Field
                component={FieldStyled}
                id="whatsapp"
                name="whatsapp"
                type="number"
              />
              <ErrorMessage name="whatsapp" />

              <TextLabel htmlFor="choice">Selecione</TextLabel>
              <Field
                component={SelectStyled}
                id="choice"
                name="choice"
                as="select"
              >
                <option value="orcamento">Solicitar orçamento</option>
                <option value="negociacos">Negociações</option>
                <option value="informacoes">Outras informações</option>
              </Field>

              <TextLabel htmlFor="mensage">Mensagem</TextLabel>
              <TextArea id="mensage" name="mensage"></TextArea>
              <ErrorMessage name="mensagel" />

              <Button type="submit" disabled={!isValid}>
                Enviar
              </Button>
            </FormStyled>
          </Form>
        )}
      </Formik>
    </Container>
  )
}
export default FormValidation
