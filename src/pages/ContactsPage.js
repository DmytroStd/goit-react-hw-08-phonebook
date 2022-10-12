import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
//////
import {
  fetchContacts,
  addContactFromApi,
  deleteContactFromApi,
} from '../redux/Contacts/operations';
//////check
import {
  getFilterContacts,
  getContacts,
  getState,
} from 'redux/Contacts/selectors';
import { setFilter } from '../redux/Contacts/filterActions';
import { getFilter } from 'redux/Contacts/selectors';
///////////
import Form from '../components/Contacts/contact-form/ContactForm';
import Filter from '../components/Contacts/filter/Filter';
import ContactList from '../components/Contacts/contact-list/ContactList';
import Container from '../components/Contacts/container/Container';
import { HeroTitle } from '../components/Contacts/titles/HeroTitle';
import { SecondaryTitle } from '../components/Contacts/titles/SecondaryTitle';
import { Loading } from '../components/Contacts/titles/Loading';
import styles from '../components/Contacts/contact-list/ContactList.module.css';

const ContactsPage = () => {
  const contacts = useSelector(getContacts);
  const { loading } = useSelector(getState);
  const filter = useSelector(getFilter);
  const filtredContacts = getFilterContacts(contacts, filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContact = data => {
    dispatch(addContactFromApi(data));
  };

  const deleteContact = id => {
    dispatch(deleteContactFromApi(id));
  };

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <Container>
      <HeroTitle />
      <Form onSubmit={addContact} contacts={contacts} />
      {/* <SecondaryTitle /> */}
      {contacts.length > 0 ? (
        <>
          <SecondaryTitle /> <Filter value={filter} onChange={changeFilter} />
        </>
      ) : (
        <div>
          <p className={styles.text}>your phonebook is empty</p>
        </div>
      )}
      {/* <Filter value={filter} onChange={changeFilter} /> */}
      {!loading && contacts.length > 0 && (
        <ContactList
          contacts={filtredContacts}
          onDeleteContact={deleteContact}
        />
      )}
      {loading && <Loading />}
    </Container>
  );
};

export default ContactsPage;
