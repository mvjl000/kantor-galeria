import React from 'react';
import Navigation from './navigation/Navigation';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
