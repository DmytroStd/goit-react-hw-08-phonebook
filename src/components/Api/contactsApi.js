import instance from './authApi';

export const getContactsFromApi = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContactFromApi = async data => {
  // try/catch(throw)
  const { data: result } = await instance.post('/contacts', data);

  return result;
};

export const deleteContactFromApi = async id => {
  // try/catch(throw)
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
