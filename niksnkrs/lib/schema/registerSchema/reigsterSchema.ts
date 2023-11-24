import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  userEmail: yup
    .string()
    .required('Please write your email')
    .matches(/^[^\s@]+@example\.com$/, '@example.com required'),
  userPassword: yup.string().required('Please write your password'),
  userName: yup.string().required('Please write your name'),
  userConfirmPassword: yup
    .string()
    .required('Please write your confirm password')
    .oneOf([yup.ref('userPassword')], `Passwords won't match`),
});
