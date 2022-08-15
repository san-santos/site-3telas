import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import {
  Container,
  Form,
  TitlePage,
  TextLabel,
  Field,
  TextArea,
  Button
} from './styled'

const SignupSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: yup.string().email('Invalid email').required('Required')
})

const FormValidation = () => {
  return (
    <Container>
      <TitlePage>Formulário de contato</TitlePage>
      <Formik
        initialValues={{
          name: '',
          email: '',
          whattsapp: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          alert(values)
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <TextLabel>Nome</TextLabel>
            <Field name="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <ErrorMessage name="name" />
            <TextLabel>Email</TextLabel>
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <ErrorMessage name="email" />
            <TextLabel>Whatsapp</TextLabel>
            <Field name="whatsapp" type="tel" />
            {errors.whattsapp && touched.whattsapp ? (
              <div>{errors.whattsapp}</div>
            ) : null}
            <ErrorMessage name="whatsapp" />
            <TextLabel>Selecione</TextLabel>
            <Field name="select" as="select">
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
            <TextLabel>Mensagem</TextLabel>
            <TextArea name="mensage"></TextArea>
            <Button type="submit">Enviar</Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}
export default FormValidation
