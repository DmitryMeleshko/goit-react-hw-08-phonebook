import { useDispatch } from 'react-redux';
import { register } from '../../redux/authOperation';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        <input type="text" name="name" placeholder="Username" required />
      </label>

      <label>
        <input type="email" name="email" placeholder="Email" required />
      </label>

      <label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};