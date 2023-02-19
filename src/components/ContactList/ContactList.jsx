import { MdPhone } from 'react-icons/md';

const ContactItem = ({ id, name, number, handleClick }) => {
  return (
    <li className="contact-item" key={id}>
      <MdPhone className="contact-icon" />
      <p className="contact-name">
        {name} : {number}
      </p>
      <button
        className="contact-btn"
        type="button"
        name={id}
        onClick={handleClick}
      >
        Delete
      </button>
    </li>
  );
};

export const ContactList = ({ contacts, filter, handleClick }) => {
  return (
    <ul className="contact-list">
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            handleClick={handleClick}
          />
        ))}
    </ul>
  );
};
