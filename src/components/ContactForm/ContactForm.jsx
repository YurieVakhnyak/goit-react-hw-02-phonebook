export const ContactForm = ({ handleSubmit, handleChange, name, number }) => {
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="contact-label">
        Name
        <input
          type="text"
          placeholder="Enter contact name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className="contact-label">
        Number
        <input
          type="tel"
          name="number"
          placeholder="Enter contact phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </label>

      <button className="contact-btn contact-add" type="submit">
        Add contact
      </button>
    </form>
  );
};
