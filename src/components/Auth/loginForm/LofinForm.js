import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/Auth/operations';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={styles.loginBox}>
      <title>Login</title>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={styles.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={styles.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button className={styles.btn} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};
