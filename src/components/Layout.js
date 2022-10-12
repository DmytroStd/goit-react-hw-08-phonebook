import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { AppBar } from '../components/Auth/AppBar/AppBar';
import { Suspense } from 'react';
import styles from '../components/Contacts/container/Container.module.css';
// import { useAuth } from './hooks/useAuth';
import HomePage from 'pages/HomePage';

export const Layout = () => {
  // const { isLoggedIn } = useAuth();
  return (
    <div className={styles.body}>
      <div
        className={styles.headerBox}
        // style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}
      >
        <AppBar />
        {/* {!isLoggedIn && (
          <div className="">
            <h1>please log in or register</h1>
          </div>
        )} */}
        {/* <HomePage /> */}
        <Suspense fallback={null}>
          <HomePage />
          <Outlet />
        </Suspense>
        {/* <Toaster position="top-right" reverseOrder={false} /> */}
      </div>
    </div>
  );
};
