import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
import App from './App';
import '../index.css';
const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Theme accentColor='crimson' grayColor='sand' radius='large' scaling='95%'>
      <ThemePanel />
      <App />
    </Theme>
  </React.StrictMode>
);
