import * as Yup from 'yup'

export default Yup.object().shape({
  name: Yup.string()
    .min(2, 'No mínimo 2 caracters!')
    .max(70, 'No máximo 70 caracteres!')
    .required('Campo obrigatório'),
  email: Yup.string()
    .email('Email invalido, é necessário conter "@ .com ou .com.br')
    .required('Campo obrigatório'),
  whatsapp: Yup.number()
    .min(11, 'Digite corretamente o número 11 9 9999-9999')
    .required('Campo obrigatório'),
  choice: Yup.string(),
  mensage: Yup.string().max(200)
})
