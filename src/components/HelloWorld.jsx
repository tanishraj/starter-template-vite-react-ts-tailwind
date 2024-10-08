import React, { useState } from 'react';

export const HelloWorld = ({ msg }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{msg}</h1>

      <div className='card'>
        <button type='button' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ul>
          <li>{/* <RouterLink to='/'>Home</RouterLink> */}</li>
          <li>{/* <RouterLink to='/about'>About</RouterLink> */}</li>
        </ul>
      </div>
      <p>
        Edit
        <code>components/HelloWorld.jsx</code> to test HMR (Hot Module
        Replacement)
      </p>

      <p>
        Check out {''}
        <a href='https://vitejs.dev/guide/' target='_blank'>
          create-react
        </a>
        , the official React + Vite starter
      </p>
      <p>
        Learn more about IDE Support for Vue in the {''}
        <a href='https://react.dev/learn' target='_blank'>
          React Docs Scaling up Guide
        </a>
        .
      </p>
      <p className='read-the-docs'>
        Click on the Vite and Vue logos to learn more
      </p>
    </div>
  );
};
