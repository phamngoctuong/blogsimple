import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';
function Layout(props) {
  return (
    <div className="container">
      {props.children}
      <Sidebar />
    </div>
  );
}
export default Layout;