import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {deleteContactThunk} from 'redux/asyncThunk';

import {
  Item,
  Button,
} from './ListItem.styled';

export function ListItem ({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <Item key={id}>
      <p>{name}</p>
      <p>{number}</p>
      <Button type="button" onClick={() => dispatch(deleteContactThunk(id))}>
      Delete</Button>
    </Item>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.func.isRequired,
};

