import { useDispatch } from 'react-redux';
import { register } from '../../../redux/Auth/operations';
import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
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
    <div className={styles.registerBox}>
      <title>Registration</title>

      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={styles.label}>
          Username
          <input className={styles.input} type="text" name="name" />
        </label>
        <label className={styles.label}>
          Email
          <input className={styles.input} type="email" name="email" />
        </label>
        <label className={styles.label}>
          Password
          <input className={styles.input} type="password" name="password" />
        </label>
        <button className={styles.btn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
