import React, { useState } from 'react';
import './App.css';
import { MemoTop } from './MemoTop/MemoTop';
import { Routes,Route } from "react-router-dom"
import { Reminders } from './Reminders/Reminders';
import { Trash } from './Trash/Trash';



export type Memo = {
  title: string
  body: string
}

export const App = (props: {storedMemoList:Memo[]})=>{
  const [memoList,setMemoList] = useState<Memo[]>(props.storedMemoList);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MemoTop memoList={memoList} setMemoList={setMemoList} />}/>
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </div>
  );
}

export default App;
