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

////done!

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as api from '../../components/Api/contactsApi';

// export const createOperation = (name, request, condition) => {
//   const operation = createAsyncThunk(
//     name,
//     async (data, { rejectWithValue }) => {
//       try {
//         const result = await request(data);
//         return result;
//       } catch (error) {
//         return rejectWithValue(error);
//       }
//     },
//     { condition }
//   );
//   return operation;
// };

// export const pendingCallback = store => {
//   store.loading = true;
//   store.error = null;
// };

// export const rejectedCallback = (store, { payload }) => {
//   store.loading = false;
//   store.error = payload;
// };

// const isDublicate = ({ name, phone }, contacts) => {
//   const normalizedName = name.toLowerCase();
//   const normalizedNumber = phone.toLowerCase();

//   const result = contacts.find(item => {
//     return (
//       normalizedName === item.name.toLowerCase() &&
//       normalizedNumber === item.phone.toLowerCase()
//     );
//   });
//   return Boolean(result);
// };

// export const fetchContacts = createOperation(
//   'contacts/fetch',
//   api.getContactsFromApi
// );

// export const addContactFromApi = createOperation(
//   'contacts/add',
//   api.addContactFromApi,
//   (data, { getState }) => {
//     const { contacts } = getState();
//     if (isDublicate(data, contacts.items)) {
//       alert(`${data.name} : ${data.phone} is already in list`);
//       return false;
//     }
//   }
// );

// export const deleteContactFromApi = createOperation(
//   'contacts/remove',
//   api.deleteContactFromApi
// );
