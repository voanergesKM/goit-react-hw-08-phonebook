import { Box } from 'components/Box';
import { Button } from 'components/Button/Button';
import { FormTitle } from 'components/ContactForm/FormTitle';
import { Error, Input } from 'components/ContactForm/SearchInput.styled';
import { ErrorMessage, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { signupUser } from 'redux/auth/authOperations';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required(),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export const Register = () => {
  const dispatch = useDispatch();
  return (
    <Box p={4} border="normal" maxWidth="400px" mb={5} mx="auto">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          dispatch(signupUser(values));
          actions.resetForm();
        }}
        validationSchema={schema}
      >
        <Form>
          <FormTitle title="Name" htmlFor="name">
            <Input type="text" name="name" />
            <ErrorMessage name="name" component={Error} />
          </FormTitle>
          <FormTitle title="E-mail" htmlFor="email">
            <Input type="email" name="email" />
            <ErrorMessage name="email" component={Error} />
          </FormTitle>
          <FormTitle title="Password" htmlFor="password">
            <Input type="password" name="password" />
            <ErrorMessage name="password" component={Error} />
          </FormTitle>
          <Button type="submit" text="Register" />
        </Form>
      </Formik>
    </Box>
  );
};
