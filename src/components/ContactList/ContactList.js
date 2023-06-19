import { useSelector } from 'react-redux';
import { ListItem } from 'components/ListItem/ListItem';
import { List } from './ContactList.styled';
import { getFilteredContacts } from 'redux/selectors';

export function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  console.log(contacts);


  return (
        <List>
          {contacts.map(({ id, name, number }) => (
            <ListItem
              key={id}
              id={id}
              name={name}
              number={number}
            />
          ))}
        </List>
      );
    };