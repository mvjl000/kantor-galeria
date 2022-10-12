import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { H1 } from '../components/ui';
import { flexColumnCenter } from '../styles/mixins';

const StyledForm = styled(Form)`
  ${flexColumnCenter};
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
        {({ values }) => (
          <StyledForm>
            <p>Form</p>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default AuthPage;
