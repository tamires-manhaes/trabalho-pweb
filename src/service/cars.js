import api from './index';

export const getCars = () => {
  let data = null;
  api.get('/cars').then((response) => (data = response));

  return data;
};

export const getCar = (id) => {
  let data = null;
  api.get(`/car/${id}`).then((response) => (data = response));

  return data;
};
