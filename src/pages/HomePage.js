import React from 'react';
import { useAuth } from '../components/hooks/useAuth';

const HomePage = () => {
  const { user } = useAuth();
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <div className="">
          <h1>hello, {user.name}</h1>
        </div>
      ) : (
        <div className="">
          <h1>please log in or register</h1>
        </div>
      )}
    </>
  );
};
export default HomePage;
