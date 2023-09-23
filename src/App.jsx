import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRoutes from './routes';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tree">Tree</Link>
            </li>
            <li>
              <Link to="/dash">Dash</Link>
            </li>
          </ul>
        </nav>
        {/* Incluindo as rotas */}
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
