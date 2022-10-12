import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { AppBar } from '../components/Auth/AppBar/AppBar';
import { Suspense } from 'react';
import styles from '../components/Contacts/container/Container.module.css';
// import HomePage from 'pages/HomePage';

export const Layout = () => {
  return (
    <div className={styles.body}>
      <div
        className={styles.headerBox}
        // style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}
      >
        <AppBar />
        {/* <HomePage /> */}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        {/* <Toaster position="top-right" reverseOrder={false} /> */}
      </div>
    </div>
  );
};
