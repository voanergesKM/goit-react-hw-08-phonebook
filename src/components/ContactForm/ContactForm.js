import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Box } from 'components/Box';
// import { FormTitle } from './FormTitle';
import { Button } from 'components/Button/Button';
import { Error, Input } from './SearchInput.styled';
import { addContact } from 'redux/contacts/contactsOperations';
import { onExistContact, onSuccesAddContact } from 'utils/notify';
import { Typography } from '@mui/material';

const initialValues = {
  name: '',
  number: '',
};

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  number: Yup.string('Phone number must be a "Number" type').required(
    'Please, enter valid Phone Number'
  ),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(state => state.contacts.items);

  return (
    <Box p={4} border="normal" maxWidth="400px" mb={5}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          const findedContact = contactList.find(contact =>
            contact.name.toLowerCase().includes(values.name.toLowerCase())
          );

          if (findedContact) {
            onExistContact(findedContact);
            actions.resetForm();
            return;
          } else {
            onSuccesAddContact(values);
            dispatch(addContact(values, actions));
            actions.resetForm();
          }
        }}
        validationSchema={schema}
      >
        <Form>
          <Typography title="Name" htmlFor="name">
            <Input type="text" name="name" />
            <ErrorMessage name="name" component={Error} />
          </Typography>
          <Typography title="Number" htmlFor="number">
            <Input type="tel" name="number" />
            <ErrorMessage name="number" component={Error} />
          </Typography>
          <Button type="submit" text="Add contact" />
        </Form>
      </Formik>
    </Box>
  );
};
