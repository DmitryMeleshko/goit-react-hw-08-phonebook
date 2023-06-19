import shortid from 'shortid';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addContactThunk} from 'redux/asyncThunk';

import { selectContacts } from 'redux/selectors';

import { FormBox, Input } from './Form.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

 

  const inputChangeHandler = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        throw new Error('invalid input name');
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    
    const newContact = {
      id: shortid.generate(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };

    if (checkExistsName(name)) {
      alert(`${name} is already in the phonebook.`);
    } else if (checkExistsNumber(number)) {
      alert(`${number} is already in the phonbook.`);
    } else if (checkExistsQuery(name,number)) {
      alert("Enter the contact`s name and phone number!");
    } else { 
    dispatch(addContactThunk(newContact));
  }
    e.target.reset();
  };
  const checkExistsName = name => {
    return contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
  };

  const checkExistsNumber = number => {
    return contacts.find(contact => contact.number === number);
  };

  const checkExistsQuery = (name, number) => {
    return name.trim() === '' || number.trim() === '';
  };

  return (
    <>
      <FormBox onSubmit={submitHandler}>
        <label>
          Name:
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$"
            maxLength={35}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={inputChangeHandler}
          />
        </label>
        <label>
          Number:
          <Input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            maxLength={35}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={inputChangeHandler}
          />
        </label>
        <button type="submit">
        </button>
      </FormBox>
    </>
  );
};