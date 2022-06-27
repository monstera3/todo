import React, { useState } from 'react';
import './App.css';
import { MemoTop } from './MemoTop/MemoTop';
import { Routes,Route } from "react-router-dom"
import { Reminders } from './Reminders/Reminders';
import { Trash } from './Trash/Trash';
import { Archive } from './Archive/Archive';



export type Memo = {
  id: number
  title: string
  body: string
  isFixed: boolean
  pinnedAt: number | 0
  isArchived: boolean
}

export const App = (props: {storedMemoList:Memo[]})=>{
  const [memoList,setMemoList] = useState<Memo[]>(props.storedMemoList);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MemoTop memoList={memoList} setMemoList={setMemoList} />}/>
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/archive" element={<Archive />} />

      </Routes>
    </div>
  );
}

export default App;
