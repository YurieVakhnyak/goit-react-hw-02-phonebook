import React, { Component } from 'react';

const TitlePhonebook = ({ title = 'Phonebook' }) => {
  return <p className="title">{title}</p>;
};

// handleChange = evt => {
//   const { name, value } = evt.target;
//   this.setState({ [name]: value });
// };

// handleSubmit = evt => {
//   evt.preventDefault();
//   const { contacts, name } = this.state;
//   console.log(`Name: ${name}, Contacts: ${contacts}`);
//   this.props.onSubmit({ ...this.state });
//   this.reset();
// };

// const InputContacts = () => {
//   return (
//     <form onSubmit={this.handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//       <button type="submit">Add contact</button>
//     </form>
//   );
// };

const ContactList = ({ contacts }) => {
  return (
    <div>
      <p className="title-list">Here I am!</p>
      {/* <p className="subtitle-list">{contacts[0].name}</p> */}
      <ul>
        {contacts.map(({ name, number }) => (
          <li className="friend-item">
            <p className="contact-name">{name}</p>
            <p className="contact-number">{number}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// export class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       contacts: [],
//       name: '',
//     };
//   }
//   render() {
//     const { contacts, name } = this.state;
//     return (
//       <div>
//         <TitlePhonebook />
//         <InputContacts onSubmit={this.handleSubmit} />
//         <ContactList contacts={this.state.contacts} />
//       </div>
//     );
//   }
// }

const INITIAL_STATE = {
  contacts: [],
  filter: '',
  name: '',
  number: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  // Для всіх інпутів створюємо один обробник
  // Розрізняти інпути будемо за атрибутом name
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { contacts, filter, name, number } = this.state;

    contacts.push({ name: name, number: number });

    console.log(
      `contacts: ${contacts[0].name}, filter: ${filter}, name: ${name}, number: ${number}`
    );
    this.setState({
      name: name,
      number: number,
    });
    // this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { contacts, filter, name, number } = this.state;

    return (
      <div className="phonebook">
        <TitlePhonebook />
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="name"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              placeholder="Enter your phone number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Search
            <input
              type="name"
              placeholder="..."
              name="filter"
              value={filter}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        {this.state.contacts.length === 0 ? (
          ''
        ) : (
          <ContactList contacts={contacts} />
        )}
      </div>
    );
  }
}
