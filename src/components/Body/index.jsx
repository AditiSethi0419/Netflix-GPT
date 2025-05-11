// components/Body/index.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header'

const Body = () => {
  return (
    <div>
      <Header />
      <div ><img src='https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_small.jpg' alt='bg-img' /></div>
      {/* Render nested routes here */}
      <Outlet />
    </div>
  );
};

export default Body;
