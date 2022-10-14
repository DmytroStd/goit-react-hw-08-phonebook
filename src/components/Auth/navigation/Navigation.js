import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import styles from './Navigation.module.css';

const getClassName = ({ isActive }) => {
  return isActive ? styles.activeLink : styles.link;
};

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={styles.nav}>
      <NavLink className={getClassName} to="/home" end>
        home
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink className={getClassName} to="/contacts">
            contacts
          </NavLink>
        </>
      )}
    </nav>
  );
};
