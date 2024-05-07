import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import RouteWrapper from './routes/RoutesWrapper.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouteWrapper />
  </React.StrictMode>,
)
