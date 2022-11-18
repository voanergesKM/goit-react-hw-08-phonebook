import axios from 'axios';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = async credentials => {
  try {
    const res = await axios.post('/users/signup', credentials);
    setAuthToken(res.data.token);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async credentials => {
  try {
    const res = await axios.post('/users/login', credentials);
    setAuthToken(res.data.token);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = async () => {
  try {
    const res = await axios.post('users/logout');
    clearAuthToken();

    return res;
  } catch (error) {
    console.log(error);
  }
};
