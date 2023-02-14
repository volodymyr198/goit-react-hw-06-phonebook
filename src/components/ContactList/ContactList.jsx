import { useSelector } from 'react-redux';

import css from './ContactList.module.css';
import ContactItem from './ContactItem';

const ContactList = () => {
    const contacts = useSelector(state => {
        const normalizedFilter = state.filter.toLowerCase();
        return state.contacts.items.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    });

    return (
        <ul className={css.contactList}>
            {contacts.map(({ id, name, number }, index) => (
                <ContactItem key={id} name={name} number={number} id={id} />
            ))}
        </ul>
    );
};

export default ContactList;
