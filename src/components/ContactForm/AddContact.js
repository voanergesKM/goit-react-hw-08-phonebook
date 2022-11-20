import { Drawer } from '@mui/material';

import { ContactForm } from './ContactForm';

export const AddContact = ({ isDrawerOpen, closeDrawer }) => {
  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={closeDrawer}>
      <ContactForm />
    </Drawer>
  );
};
