import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const description = "JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. It is primarily used with React to describe the UI structure in a more readable and expressive way. ";

  return (
    <div>
      <h1>Welcome to JSX</h1>
      <p>{description}</p>
      
    </div>
  );
};


export default App
