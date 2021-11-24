import React from 'react';
import './App.scss';

import {
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";

import { Home } from './pages/home'

const App = () => {
  return (
    <div className='App'>
      <Routes>
      <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>
    </div>
  );
}

export default App;
