import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { Card } from './components/Card';

function App() {
  const [inputText,setInputText] = useState('');
  const [taskList,setTaskList] = useState(['aa', 'bb']);
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  const onChangeInputText = (e:any) =>{
    setInputText(e.target.value)
  }

  const onClickAdd = () => {
    if (inputText === '')return;
    const newTasks = [...taskList, inputText];
    setTaskList(newTasks);
    setInputText('');
  };

  const drawerWidth = () => {
    return menuIsOpen ? "w-1/6" : "w-2";
  }

  const toggleMenuIsOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <div className="App">
      <Header toggleMenuIsOpen={toggleMenuIsOpen}/>
      <div className="flex flex-row w-screen">
        <div className={drawerWidth()}>
          <div>メモ</div>
          <div>リマインダー</div>
          <div>メモ</div>
          <div>料理</div>
          <div>ラベルの編集</div>
          <div>アーカイブ</div>
        </div>
      <div className="flex flex-col w-full justify-items-center">
      <InputForm
        inputText={inputText} onChange={onChangeInputText} onClick={onClickAdd}/>
      <Card tasks={taskList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
