import React from 'react';
import Nav from './Layouts/Header/Nav';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default App;