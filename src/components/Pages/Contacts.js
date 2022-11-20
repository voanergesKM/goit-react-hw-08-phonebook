import { Box } from 'components/Box';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/FriendList/FriendList';
import { Title } from 'components/Title/AppTitle';
import { SectionTitle } from 'components/Title/SectionTitle';
import { ToastContainer } from 'react-toastify';

export const Contacts = () => {
  return (
    <Box my={0} mx="auto" px={4} as="main">
      <Title text="Phonebook" />
      <SectionTitle text="Contacts" />
      <Filter />
      <ContactList />
      <ToastContainer />
    </Box>
  );
};
