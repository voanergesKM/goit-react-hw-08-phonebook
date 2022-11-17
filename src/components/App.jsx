import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Contacts } from './Pages/Contacts';
import { Login } from './Pages/LoginPage';
import { Register } from './Pages/RegisterPage';

// import { ToastContainer } from 'react-toastify';
// import { Title } from './Title/AppTitle';
// import { ContactForm } from './ContactForm/ContactForm';
// import { SectionTitle } from './Title/SectionTitle';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './FriendList/FriendList';
// import { Box } from './Box';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};
