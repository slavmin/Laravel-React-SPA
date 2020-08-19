import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="container pt-5">
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
