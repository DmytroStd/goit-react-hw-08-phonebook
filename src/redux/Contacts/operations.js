import { toast } from 'react-toastify';
import * as api from '../../components/Api/contactsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const pendingCallback = store => {
  store.loading = true;
  store.error = null;
};

export const rejectedCallback = (store, { payload }) => {
  store.loading = false;
  store.error = payload;
};

const isDublicate = ({ name, number }, contacts) => {
  const normalizedName = name.toLowerCase();
  const normalizedNumber = number.toLowerCase();

  const result = contacts.find(item => {
    return (
      normalizedName === item.name.toLowerCase() &&
      normalizedNumber === item.number.toLowerCase()
    );
  });
  return Boolean(result);
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContactsFromApi();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContactFromApi = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContactFromApi(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (isDublicate(data, contacts.items)) {
        toast(`${data.name} - ${data.number} is alredy exist`);
        return false;
      }
    },
  }
);

export const deleteContactFromApi = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContactFromApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
