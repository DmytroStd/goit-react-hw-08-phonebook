import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { PrivateRoute } from '../components/PrivateRoute';
import { RestrictedRoute } from '../components/RestrictedRoute';
import { refreshUser } from '../redux/Auth/operations';
import { useAuth } from './hooks/useAuth';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" redirectTo="/home" element={<Layout />}>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/home"
            element={<PrivateRoute component={<HomePage />} />}
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/home" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
