import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Backdrop } from './FriendEdit.styled';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/contactsOperations';
import { Button, TextField } from '@mui/material';

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

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    number: Yup.string().required('No number provided.'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, actions) => {
      dispatch(editContact({ id, values }));
      actions.resetForm();
      onToggle();
    },
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
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{ mb: 4 }}
        />

        <TextField
          fullWidth
          id="number"
          name="number"
          label="Number"
          type="text"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
          sx={{ mb: 4 }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ mx: 'auto', display: 'flex' }}
        >
          Edit
        </Button>
      </form>
    </Backdrop>,
    editRoot
  );
};

FriendEditor.propTypes = {
  onToggle: PropTypes.func,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
