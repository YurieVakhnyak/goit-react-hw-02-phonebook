import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import React, { Component } from 'react';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Phonebook, ContactTitle, TitlePhonebook } from './App.styled';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  name: '',
  number: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    // get data from LocalStorage, if it exists
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevState) {
    // save data to LocalStorage, if it changes
    if (prevState !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  deleteContact = contactId => {
    // delete contact by click button 'Delete'
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  //   const index = this.state.contacts.findIndex(
  //     contact => contact.id === event.target.name
  //   );
  //   this.state.contacts.splice(index, 1);
  //   this.setState({
  //     contacts: this.state.contacts,
  //   });
  // };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  handleInput = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });

    return evt.target.value;
  };
  handleSubmit = evt => {
    evt.preventDefault();

    const { contacts, name, number } = this.state;
    const filteredContacts = contacts.filter(contact => contact.name === name);

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    filteredContacts.length > 0
      ? Notify.info(`${name} is allready in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
          name: '',
          number: '',
        }));
  };

  render() {
    const { contacts, filter, name, number } = this.state;

    return (
      <Phonebook>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <ContactForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          name={name}
          number={number}
        />
        <ContactTitle>Contacts</ContactTitle>

        <Filter handleInput={this.handleInput} filter={filter} />
        {contacts.length > 0 && (
          <ContactList
            contacts={contacts}
            filter={filter}
            onDeleteContact={this.deleteContact}
          />
        )}
      </Phonebook>
    );
  }
}
