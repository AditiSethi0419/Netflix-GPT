import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Body = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <img
        className="absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_small.jpg"
        alt="bg"
      />

      {/* Black gradient overlay */}
      <div className="absolute w-full h-full bg-gradient-to-b from-black/80 to-black/60"></div>

      {/* Header and routed content */}
      <Header />
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
