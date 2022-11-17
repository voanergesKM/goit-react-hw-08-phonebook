import { Box } from 'components/Box';
import { Button } from 'components/Button/Button';
import { FormTitle } from 'components/ContactForm/FormTitle';
import { Error, Input } from 'components/ContactForm/SearchInput.styled';
import { ErrorMessage, Form, Formik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const schema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export const Login = () => {
  return (
    <Box p={4} border="normal" maxWidth="400px" mb={5}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => null}
        validationSchema={schema}
      >
        <Form>
          <FormTitle title="E-mail" htmlFor="email">
            <Input type="email" name="email" />
            <ErrorMessage name="email" component={Error} />
          </FormTitle>
          <FormTitle title="Password" htmlFor="password">
            <Input type="password" name="password" />
            <ErrorMessage name="password" component={Error} />
          </FormTitle>
          <Button type="submit" text="LogIn" />
        </Form>
      </Formik>
    </Box>
  );
};
