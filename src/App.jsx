import React from 'react';
import { HelloWorld } from '@/components/HelloWorld';
import viteLogo from '@/assets/logo/vite.svg';
import reactLogo from '@/assets/logo/react.svg';
import './App.scss';
export const App = () => {
  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://vuejs.org/' target='_blank'>
          <img src={reactLogo} className='logo vue' alt='Vue logo' />
        </a>
      </div>
      <HelloWorld msg='Vite + React' />
    </div>
  );
};
