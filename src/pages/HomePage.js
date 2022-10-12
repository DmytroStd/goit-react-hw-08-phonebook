import React from 'react';
import { useAuth } from '../components/hooks/useAuth';
import styles from '../components/Auth/userMenu/UserMenu.module.css';

const HomePage = () => {
  const { user } = useAuth();
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <div className="">
          <h1 className={styles.title}>hello, {user.name.toUpperCase()}</h1>
        </div>
      ) : (
        <div className="">
          <h1 className={styles.title}>please login or register</h1>
        </div>
      )}
    </>
  );
};
export default HomePage;
