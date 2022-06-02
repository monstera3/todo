import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { Card } from './components/Card';

function App() {
  const [inputText,setInputText] = useState('');
  const [taskList,setTaskList] = useState(['aa', 'bb']);

  const onChangeInputText = (e:any) =>{
    setInputText(e.target.value)
  }

  const onClickAdd = () => {
    if (inputText === '')return;
    const newTasks = [...taskList, inputText];
    setTaskList(newTasks);
    setInputText('');
  };

  return (
    <div className="App">
      <Header />
      <InputForm
        inputText={inputText} onChange={onChangeInputText} onClick={onClickAdd}/>
      <Card tasks={taskList}/>
    </div>
  );
}

export default App;
