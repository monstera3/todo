import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { Card } from './components/Card';
import { MdOutlineLightbulb } from 'react-icons/md';
import { BiBell, BiTag, BiTrash } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';
import { RiInboxArchiveLine } from 'react-icons/ri';

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
    return menuIsOpen ? "w-40" : "w-0 text-transparent";
  }


  const toggleMenuIsOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <div className="App">
      <Header toggleMenuIsOpen={toggleMenuIsOpen}/>
      <div className="flex flex-row w-screen">
        <div >
          <div className='flex m-4'><MdOutlineLightbulb className='mr-4' size='1.5rem'/><p className={drawerWidth()}>メモ</p></div>

          {/*<div className='flex m-2'><MdOutlineLightbulb className='mr-4' size='1.5rem'/><span>メモ</span></div>*/}
          {/*<div className='flex m-2'><BiBell className='mr-4' size='1.5rem'/>リマインダー</div>*/}
          {/*<div className='flex m-2'><BiTag className='mr-4' size='1.5rem'/>メモ</div>*/}
          {/*<div className='flex m-2'><BiTag className='mr-4' size='1.5rem'/>料理</div>*/}
          {/*<div className='flex m-2'><BsPencil className='mr-4' size='1.5rem'/>ラベルの編集</div>*/}
          {/*<div className='flex m-2'><RiInboxArchiveLine className='mr-4' size='1.5rem'/>アーカイブ</div>*/}
          {/*<div className='flex m-2'><BiTrash className='mr-4' size='1.5rem'/>ゴミ箱</div>*/}
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
