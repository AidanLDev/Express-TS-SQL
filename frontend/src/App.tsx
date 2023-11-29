import React from 'react';
import { useGetData } from './hooks/useGetData';
import logo from './logo.svg';
import './App.css';

function App() {
  const getAllTodosUrl = '/todo/all';
  const { data, isLoading, serverError } = useGetData(getAllTodosUrl);
  console.log({ data, isLoading, serverError });
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;