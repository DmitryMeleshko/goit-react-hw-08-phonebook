import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { filterContacts } from '../../redux/filterSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <Label>
      <Input
        type="text"
        placeholder="Find contacts by name..."
        value={filter}
        onChange={evt => dispatch(filterContacts(evt.target.value))}
      />
    </Label>
  );
};