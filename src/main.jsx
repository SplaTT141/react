import { StrictMode } from 'react'; //pavercia JSX (react) koda i HTML + JS + CSS, kuri sugeba perskaityt narsykles.
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
