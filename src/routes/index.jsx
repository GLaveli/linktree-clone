import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Tree from '../pages/Tree';
import Dashboard from '../pages/Dashboard';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tree/:channel" element={<Tree />} />
      <Route path="/dash" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;
