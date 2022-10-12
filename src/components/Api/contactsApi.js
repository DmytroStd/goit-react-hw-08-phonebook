import instance from './authApi';

export const getContactsFromApi = async () => {
  try {
    const { data } = await instance.get('/contacts');
    return data;
  } catch (error) {
    throw error;
  }
};

export const addContactFromApi = async data => {
  try {
    const { data: result } = await instance.post('/contacts', data);
    return result;
  } catch (error) {}
};

export const deleteContactFromApi = async id => {
  try {
    const { data } = await instance.delete(`/contacts/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
