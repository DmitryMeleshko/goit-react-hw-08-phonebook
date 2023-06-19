import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ContactForm } from '../components/Form/Form';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { getContactsThunk } from 'redux/asyncThunk';
import { selectIsLoggedIn } from '../redux/selectors';

export default function Tasks() {
  const isLoading = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
    <Helmet>
      <title>Phonebook</title>
    </Helmet>
    <ContactForm />
    <div>{isLoading && 'Request in progress...'}</div>
    <Filter/>
    <ContactList/>
    </>
  );
}