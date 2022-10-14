import { Outlet } from 'react-router-dom';
import { AppBar } from '../components/Auth/AppBar/AppBar';
import { Suspense } from 'react';
import styles from '../components/Contacts/container/Container.module.css';

export const Layout = () => {
  return (
    <div className={styles.body}>
      <div className={styles.headerBox}>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
