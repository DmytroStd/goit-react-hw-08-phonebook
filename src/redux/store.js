import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './Auth/slice';
import contactsReducer from './Contacts/contactsSlice';
import filterReducer from './Contacts/filtrReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

// // /////done
// import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './Contacts/contactsSlice';
// import filterReducer from './Contacts/filtrReducer';

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });

// export default store;

// // import { configureStore, combineReducers } from '@reduxjs/toolkit';
// // import {
// //   persistStore,
// //   persistReducer,
// //   FLUSH,
// //   REHYDRATE,
// //   PAUSE,
// //   PERSIST,
// //   PURGE,
// //   REGISTER,
// // } from 'redux-persist';
// // import storage from 'redux-persist/lib/storage';

// // const rootReducer = combineReducers({
// //   contacts: contactsReducer,
// // });

// // const persistConfig = {
// //   key: 'root',
// //   storage,
// // };

// // const persistedReducer = persistReducer(persistConfig, rootReducer);

// // const store = configureStore({
// //   reducer: persistedReducer,
// //   middleware: getDefaultMiddleware =>
// //     getDefaultMiddleware({
// //       serializableCheck: {
// //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// //       },
// //     }),
// // });

// // export const persistor = persistStore(store);
