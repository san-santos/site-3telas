import { Formik, Form } from 'formik'
import schema from './schema'
import { Field, Select, TextArea } from './field'
import { Container, FormStyled, TitlePage, Button } from './styled'

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
        onSubmit={(values, actions) => {
          console.log('ONSUBMIT', values)
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {({ isValid }) => (
          <Form>
            <FormStyled>
              <Field
                name="name"
                label="Nome"
                type="text"
                InputComponent={undefined}
              />

              <Field
                name="email"
                type="email"
                label="Email"
                InputComponent={undefined}
              />

              <Field
                name="whatsapp"
                type="number"
                label="Whatsapp"
                InputComponent={undefined}
              />

              <Select
                name="choice"
                as="select"
                label="Selecione"
                options={undefined}
                SelectComponent={undefined}
              />

              <TextArea
                name="mensage"
                label={'Mensagem'}
                TextAreaComponent={undefined}
              ></TextArea>

              <Button type="submit" disabled={!isValid}>
                Enviar mensagem
              </Button>
            </FormStyled>
          </Form>
        )}
      </Formik>
    </Container>
  )
}
export default FormValidation
