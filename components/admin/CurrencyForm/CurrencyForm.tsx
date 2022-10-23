import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { FormWrapper, StyledForm } from './CurrencyForm.styles';
import { H2, InputWrapper, StyledInput, SubmitButton, SubmitButtonWrapper } from '../../ui';

interface FormTypes {
  name: string;
  fullName: string;
  buy: string;
  sell: string;
  flag: File | undefined;
}

const initialFormValues: FormTypes = {
  name: '',
  fullName: '',
  buy: '',
  sell: '',
  flag: undefined,
};

const schema = Yup.object().shape({
  name: Yup.string().required('Podaj skrót!'),
  fullName: Yup.string().required('Podaj pełną nazwę!'),
  buy: Yup.string().required('Podaj cenę kupna!'),
  sell: Yup.string().required('Podaj cenę sprzedaży'),
  // flag: Yup.mixed().required(),
});

const CurrencyForm: React.FC = () => {
  return (
    <FormWrapper>
      <H2>Dodaj walutę</H2>
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
              <label htmlFor="name">Skrót</label>
              <StyledInput
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="name" component="p" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="fullName">Pełna nazwa</label>
              <StyledInput
                id="fullName"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="fullName" component="p" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="buy">Kupno</label>
              <StyledInput
                id="buy"
                name="buy"
                value={values.buy}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="buy" component="p" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="sell">Sprzedaż</label>
              <StyledInput
                id="sell"
                name="sell"
                value={values.sell}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="sell" component="p" />
            </InputWrapper>
            <SubmitButtonWrapper>
              <SubmitButton
                disabled={
                  Object.entries(errors).length !== 0 || Object.entries(touched).length === 0
                }
              >
                Dodaj
              </SubmitButton>
            </SubmitButtonWrapper>
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  );
};

export default CurrencyForm;