import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const getClassName = ({ isActive }) => {
  return isActive ? styles.activeLink : styles.link;
};

export const AuthNav = () => {
  return (
    // <div>
    //   <div>
    //     <NavLink className={css.link} to="/home">
    //       home
    //     </NavLink>
    //   </div>
    <div>
      <NavLink className={getClassName} to="/register">
        register
      </NavLink>
      <NavLink className={getClassName} to="/login">
        log In
      </NavLink>
    </div>
    // </div>
  );
};
