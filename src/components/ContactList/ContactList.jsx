import { useSelector, useDispatch } from 'react-redux';
import { delContact } from '../../rudux/contacts/contacts-operations';
import {
  getContacts,
  getFilterValue,
} from '../../rudux/contacts/contacts-selectors';
import s from './ContactList.module.css';
import Button from '../Button/Button';

function ContactList() {
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalazedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazedFilter)
    );
  };

  return (
    <ul className={s.container}>
      {getVisibleContacts().map(({ id, name, phone }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>{name} :</p>
          <p className={s.text}>{phone}</p>
          <Button text="Delete" onClick={() => dispatch(delContact(id))} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
