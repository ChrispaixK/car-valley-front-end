import axios from 'axios';
import { getCookie, setCookie } from './cookie';

const baseURL = 'http://127.0.0.1:3000/';

const authentication = (ep, credentials) => axios.post(
  `${baseURL}${ep}`,
  JSON.stringify(credentials),
  {
    headers: { 'Content-Type': 'application/json' },
  },
).then((response) => {
  const { token, user } = response.data;
  if (ep === 'users/login') {
    setCookie('token', token);
    setCookie('user', JSON.stringify(user));
  }
  return response.data;
}).catch((error) => {
  if (error.response) {
    return error.response.data;
  }
  return { status: 'failure', error: 'Check Your Connection' };
});

const getWithToken = (ep) => axios.get(
  `${baseURL}${ep}`,
  {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
    },
  },
).then((response) => response);

const reqWithToken = (method, ep, obj) => {
  axios({
    method,
    url: `${baseURL}${ep}`,
    data: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('token')}`,
    },
  });
};

const deleteWithToken = async (ep) => {
  axios.delete(
    `${baseURL}${ep}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie('token')}`,
      },
    },

  );
};

export {
  authentication, getWithToken, reqWithToken, deleteWithToken,
};
