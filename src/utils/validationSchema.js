import * as yup from 'yup';

const phoneRegex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
const emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
const loginRegex = /^[a-zA-Z0-9]+$/;

export const validatoinSchema = yup.object().shape({
  login: yup.string()
    .matches(loginRegex, "Только латинские буквы и цифры")
    .required('Поле является обязательным'),
  tel: yup.string()
    .matches(phoneRegex, 'Неверный формат телефона')
    .required('Поле является обязательным'),
  email: yup.string()
    .matches(emailRegex, "Неверный формат email"),
  password: yup.string()
    .required('Поле является обязательным'),
  passwordRepeat: yup.string()
    .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
    .required('Поле является обязательным'),
})