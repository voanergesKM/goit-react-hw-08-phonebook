import axios from 'axios';

export const registerUser = async credentials => {
  const res = await axios.post('/users/signup', credentials);
  return res.data;
};
