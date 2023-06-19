import {NavLink} from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to ="/login">Login</NavLink></div>
  );
};