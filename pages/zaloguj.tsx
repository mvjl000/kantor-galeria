import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { H1, InputWrapper, StyledInput, SubmitButton, SubmitButtonWrapper } from '../components/ui';
import { flexColumnCenter } from '../styles/mixins';

const StyledForm = styled(Form)`
  ${flexColumnCenter};
  gap: 20px;
  margin: 50px auto 0;
  width: 75%;
  max-width: 500px;

  ${({ theme }) => theme.mq.desktop} {
    gap: 30px;
  }
`;

const initialFormValues = {
  username: '',
  password: '',
};

const schema = Yup.object().shape({
  username: Yup.string().required('Podaj nazwę użytkownika!'),
  password: Yup.string().required('Podaj hasło!'),
});

const AuthPage: NextPage = () => {
  return (
    <>
      <H1>Zaloguj się do panelu administratora</H1>
      <Formik
        initialValues={initialFormValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange, errors, touched, handleBlur }) => (
          <StyledForm>
            <InputWrapper>
              <label htmlFor="username">Nazwa użytkownika</label>
              <StyledInput
                id="username"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="username" component="p" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="password">Hasło</label>
              <StyledInput
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="password" component="p" />
            </InputWrapper>
            <SubmitButtonWrapper>
              <SubmitButton
                disabled={
                  Object.entries(errors).length !== 0 || Object.entries(touched).length === 0
                }
                type="submit"
              >
                Zaloguj
              </SubmitButton>
            </SubmitButtonWrapper>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default AuthPage;
