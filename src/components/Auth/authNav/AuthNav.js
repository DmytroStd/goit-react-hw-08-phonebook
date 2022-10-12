import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        register
      </NavLink>
      <NavLink className={css.link} to="/login">
        log In
      </NavLink>
    </div>
  );
};
