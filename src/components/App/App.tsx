import React from 'react';
import './App.css';
import { MemoTop } from './MemoTop/MemoTop';
import { Routes, Route } from 'react-router-dom'
import { Reminders } from './Reminders/Reminders';
import { Trash } from './Trash/Trash';
import { Archive } from './Archive/Archive';
import { Home } from './Home/Home';


export type Memo = {
  id: number
  title: string
  body: string
  isFixed: boolean
  pinnedAt: number | 0
  isArchived: boolean
  isTrashed: boolean
}

export const App = (props: { storedMemoList: Memo[] }) => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MemoTop storedMemoList={props.storedMemoList}/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/reminders" element={<Reminders/>}/>
          <Route path="/trash" element={<Trash/>}/>
          <Route path="/archive" element={<Archive/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
