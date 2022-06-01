import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { Card } from './components/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <InputForm />
      <Card/>
    </div>
  );
}

export default App;
