import React from 'react';
import "./MainLayout.css";

function MainLayout({children}) {
  return (
    <div className="main-layout">
      {children}
    </div>
  )
};

export default MainLayout;