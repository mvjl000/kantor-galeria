import React, { useState } from 'react';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { FormWrapper, StyledForm } from './CurrencyForm.styles';
import { H2, InputWrapper, Loader, StyledInput, SubmitButtonWrapper } from '../../ui';
import { trpc } from '../../../utils/trpc';
import { SubmitButton } from '../../buttons.styles';
import FlagUpload from './FlagUpload/FlagUpload';

interface FormTypes {
  name: string;
  fullName: string;
  buy: string;
  sell: string;
  // flag: File | undefined;
}

const initialFormValues: FormTypes = {
  name: '',
  fullName: '',
  buy: '',
  sell: '',
  // flag: undefined,
};

const schema = Yup.object().shape({
  name: Yup.string().required('Podaj skrót!'),
  fullName: Yup.string().required('Podaj pełną nazwę!'),
  buy: Yup.string().required('Podaj cenę kupna!'),
  sell: Yup.string().required('Podaj cenę sprzedaży'),
  // flag: Yup.mixed().required(),
});

const CurrencyForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const addCurrency = trpc.createCurrency.useMutation();
  const utils = trpc.useContext();

  return (
    <FormWrapper>
      <H2>Dodaj walutę</H2>
      <Formik
        initialValues={initialFormValues}
        validationSchema={schema}
        onSubmit={async (values, { resetForm }) => {
          try {
            setIsLoading(true);
            await addCurrency.mutateAsync({
              name: values.name,
              image: 'qwerty',
              fullname: values.fullName,
              buy: Number(values.buy),
              sell: Number(values.sell),
            });
            setIsLoading(false);
            // Refetch table data
            await utils.getCurrencies.fetch();
            resetForm();
          } catch (error) {
            console.log('STH WRONG');
          }
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
              <FlagUpload />
              <SubmitButton
                disabled={
                  Object.entries(errors).length !== 0 || Object.entries(touched).length === 0
                }
              >
                {isLoading ? <Loader size="small" color="white" /> : 'Dodaj'}
              </SubmitButton>
            </SubmitButtonWrapper>
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  );
};

export default CurrencyForm;
