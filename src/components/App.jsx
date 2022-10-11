import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { PrivateRoute } from '../components/PrivateRoute';
import { RestrictedRoute } from '../components/RestrictedRoute';
import { refreshUser } from '../redux/Auth/operations';
import { useAuth } from './hooks/useAuth';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        {/* <Route
          path="/home"
          element={
            <RestrictedRoute redirectTo="/login" component={<HomePage />} />
          }
        /> */}
        <Route
          path="/home"
          element={
            <PrivateRoute redirectTo="/login" component={<HomePage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

// import { lazy } from 'react';
// // import { useDispatch } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';

// const ContactsPage = lazy(() => import('../pages/ContacsPage'));
// const { Layout } = lazy(() => import('../components/Layout'));
// const HomePage = lazy(() => import('../pages/HomePage'));
// // import HomePage from 'pages/HomePage';
// // import { Routes, Route } from 'react-router-dom';

// // const App = () => {
// //   return (
// //     // <Routes>
// //     //   <Route path="/contacts" component={<Contacts />} />
// //     // </Routes>
// //     // <>
// //     <HomePage />

// //     // <ContactsPage />
// //     // </>
// //   );
// // };
// const App = () => {
//   // const dispatch = useDispatch();
//   // const { isRefreshing } = useAuth();

//   // useEffect(() => {
//   //   dispatch(refreshUser());
//   // }, [dispatch]);

//   return (
//     <Routes>
//       {/* <Route path="/" element={<Layout />}> */}
//       <Route index element={<HomePage />} />
//       {/* <Route
//           path="/register"
//           element={
//             <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
//           }
//         /> */}
//       <Route path="/contacts" element={<ContactsPage />} />
//       {/* </Route> */}
//     </Routes>
//   );
// };

// export default App;

////done with check import

// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// //////
// import {
//   fetchContacts,
//   addContactFromApi,
//   deleteContactFromApi,
// } from '../redux/operations';
// //////check
// import { getFilterContacts, getContacts, getState } from 'redux/selectors';
// import { setFilter } from '../redux/filterActions';
// import { getFilter } from 'redux/selectors';

///////////
// import Form from './contact-form/ContactForm';
// import Filter from './filter/Filter';
// import ContactList from './contact-list/ContactList';
// import Container from './container/Container';
// import { HeroTitle } from './titles/HeroTitle';
// import { SecondaryTitle } from './titles/SecondaryTitle';
// import { Loading } from './titles/Loading';
// import styles from '../components/contact-list/ContactList.module.css';

// const App = () => {
// const contacts = useSelector(getContacts);
// const { loading } = useSelector(getState);
// const filter = useSelector(getFilter);
// const filtredContacts = getFilterContacts(contacts, filter);
// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(fetchContacts());
// }, [dispatch]);

// const addContact = data => {
//   dispatch(addContactFromApi(data));
// };

// const deleteContact = id => {
//   dispatch(deleteContactFromApi(id));
// };

// const changeFilter = ({ target }) => {
//   dispatch(setFilter(target.value));
// };

// const App = () => {

// return (
// <Container>
//   <HeroTitle />
//   <Form onSubmit={addContact} contacts={contacts} />
//   {/* <SecondaryTitle /> */}
//   {contacts.length > 0 ? (
//     <>
//       <SecondaryTitle /> <Filter value={filter} onChange={changeFilter} />
//     </>
//   ) : (
//     <div>
//       <p className={styles.text}>your phonebook is empty</p>
//     </div>
//   )}
//   {/* <Filter value={filter} onChange={changeFilter} /> */}
//   {!loading && contacts.length > 0 && (
//     <ContactList
//       contacts={filtredContacts}
//       onDeleteContact={deleteContact}
//     />
//   )}
//   {loading && <Loading />}
// </Container>
//       );
// };

// export default App;
