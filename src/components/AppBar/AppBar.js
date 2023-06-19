import {Navigation} from '../Navigation/Navigation';
import {Menu} from '../Menu/Menu';
import {AuthNav} from 'components/AuthNav/AuthNav';
import {useAuth} from '../../hooks/useAuth';

export const AppBar = () => {
  const {isLoggedIn} = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <Menu /> : <AuthNav/>}
    </header>
  );
};