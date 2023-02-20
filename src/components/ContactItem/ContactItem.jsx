import { MdPhone } from 'react-icons/md';
import { DeleteButton } from 'components/ContactItem/ContactItem.styled';

import {
  ContactItemStyled,
  ContactName,
} from 'components/ContactItem/ContactItem.styled';
import { ContactButton } from 'components/ContactForm/ContactForm.styled';

export const ContactItem = ({ id, name, number, handleClick }) => {
  return (
    <ContactItemStyled key={id}>
      <MdPhone />
      <ContactName>
        {name} : {number}
      </ContactName>
      <DeleteButton type="button" name={id} onClick={handleClick}>
        Delete
      </DeleteButton>
    </ContactItemStyled>
  );
};
