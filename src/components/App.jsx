import React, { Component } from 'react';

const TitlePhonebook = ({ title = 'Phonebook' }) => {
  return <p className="title">{title}</p>;
};

const InputContacts = () => {
  return (
    <form className="contact-form">
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name }) => (
        <li className="friend-item" key={id}>
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

export class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      name: '',
    };
  }
  render() {
    return (
      <div>
        <TitlePhonebook />
        <InputContacts />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
