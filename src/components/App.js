import {useDispatch} from 'react-redux';
import {lazy, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import {RestrictedRoute} from './Routes/RestrictedRoute';
import {PrivateRoute} from './Routes/PrivatRoutes';
import {useAuth} from 'hooks/useAuth';
import {refreshUser} from 'redux/authOperation';
import {Layout} from './Layout';
import {Section} from './Section/Section';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();

  const {isRefreshing} = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <span>Refreshing user...</span>
  ) : (
    <Section>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </Section>
  );
};