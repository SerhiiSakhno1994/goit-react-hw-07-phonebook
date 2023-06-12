import Container from './Container/Container';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';

import s from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <h1 className={s.h}>Phonebook</h1>
        <ContactForm />
      </Container>

      <Container>
        <h2>Contacts</h2>
        {contacts.length > 1 && <Filter />}

        {contacts.length !== 0 ? (
          <ContactList />
        ) : (
          <div className={s.savedContacts}>You have no saved contacts</div>
        )}
      </Container>
    </>
  );
}
