import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Component/Card';
import CardList from './Component/CardList';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './Containers/App';

// import { __esModule } from '@testing-library/user-event';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



reportWebVitals();
