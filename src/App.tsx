import React from 'react';
import './App.css';
import { Home } from './components/templates/Home';
import { Routes,Route } from "react-router-dom"



export type Memo = {
  title: string
  body: string
}

export const App = (props: {memoList:Memo[]})=>{
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home memoList={props.memoList}/>}/>
      </Routes>
    </div>
  );
}

export default App;
