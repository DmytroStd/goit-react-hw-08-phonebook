import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/Auth/operations';
import { useAuth } from '../../hooks/useAuth';
import styles from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={styles.wrapper}>
      <p className={styles.username}>welcome, {user.name.toUpperCase()}</p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        logout
      </button>
    </div>
  );
};
