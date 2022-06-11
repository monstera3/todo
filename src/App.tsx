import React from 'react';
import './App.css';
import { MemoDetail } from './components/pages/MemoDetail';
import { Home } from './components/templates/Home';



export type Memo = {
  title: string
  body: string
}

export const App = (props: {memoList:Memo[]})=>{
  return (
    <div className="App">
      <Home memoList={props.memoList}/>
      <MemoDetail />
    </div>
  );
}

export default App;
