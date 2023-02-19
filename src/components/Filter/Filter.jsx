export const Filter = ({ handleInput, filter }) => {
  return (
    <label className="contact-form contact-label">
      Find contact by name:
      <input
        type="name"
        placeholder="Enter searching name..."
        name="filter"
        value={filter}
        onInput={handleInput}
      />
    </label>
  );
};
