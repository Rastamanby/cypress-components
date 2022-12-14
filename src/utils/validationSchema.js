import * as yup from 'yup';

const phoneRegex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
const emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
const loginRegex = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,10}$/;
const passwordRegex = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g;

export const validatoinSchema = yup.object().shape({
  login: yup.string()
    .matches(loginRegex, "Имя пользователя должно начинаться с латинской буквы, может содержать цифры и быть не менее 10 символов")
    .required('Поле является обязательным'),
  tel: yup.string()
    .matches(phoneRegex, 'Неверный формат телефона')
    .required('Поле является обязательным'),
  email: yup.string()
    .matches(emailRegex, "Неверный формат email"),
  password: yup.string()
    .matches(passwordRegex, "Пароль должен быть не менее 6 символов, содержать прописную и заглавную буквы, цифру")
    .required('Поле является обязательным'),
  passwordRepeat: yup.string()
    .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
    .required('Поле является обязательным'),
})