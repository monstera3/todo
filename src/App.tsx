import React, { useState } from 'react';
import './App.css';
import { Home } from './components/templates/Home';
import { Routes,Route } from "react-router-dom"
import { MemoDetail } from './components/pages/MemoDetail';
import { Reminders } from './components/templates/Reminders';
import { Trash } from './components/templates/Trash';



export type Memo = {
  title: string
  body: string
}

export const App = (props: {storedMemoList:Memo[]})=>{
  const [memoList,setMemoList] = useState<Memo[]>(props.storedMemoList);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home memoList={memoList}  setMemoList={setMemoList} />}/>
        <Route path="/memo" element={<MemoDetail />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </div>
  );
}

export default App;
