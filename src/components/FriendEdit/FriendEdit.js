import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ErrorMessage, Form, Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Backdrop } from './FriendEdit.styled';
import { useDispatch } from 'react-redux';
import { FormTitle } from 'components/ContactForm/FormTitle';
import { Input } from 'components/ContactForm/SearchInput.styled';
import { Button } from 'components/Button/Button';
import { editContact } from 'redux/contacts/contactsOperations';

const editRoot = document.querySelector('#edit-root');

export const FriendEditor = ({ onToggle, id, name, number }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEscPress);
    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  });

  const dispatch = useDispatch();

  const initialValues = {
    name,
    number,
  };

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    number: Yup.string().required('No number provided.'),
  });

  const handleEscPress = evt => {
    if (evt.code === 'Escape') {
      onToggle();
    }
  };

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onToggle();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          dispatch(editContact({ id, values }));
          actions.resetForm();
          onToggle();
        }}
        validationSchema={schema}
      >
        <Form>
          <FormTitle title="Name" htmlFor="name">
            <Input type="text" name="name" />
            <ErrorMessage name="name" component={Error} />
          </FormTitle>
          <FormTitle title="Number" htmlFor="number">
            <Input type="text" name="number" />
            <ErrorMessage name="number" component={Error} />
          </FormTitle>
          <Button type="submit" text="Edit" />
        </Form>
      </Formik>
    </Backdrop>,
    editRoot
  );
};

FriendEditor.propTypes = {
  children: PropTypes.node,
  onToggle: PropTypes.func,
};
