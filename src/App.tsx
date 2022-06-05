import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { Card } from './components/Card';
import { MdOutlineLightbulb } from 'react-icons/md';
import { BiBell, BiTag, BiTrash } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';
import { RiInboxArchiveLine } from 'react-icons/ri';

const Drawer = (props:{menuIsOpen:boolean}) => {
  const drawerWidth = () => {
    return props.menuIsOpen ? "w-40" : "w-40 text-transparent ";
  }
  return(
    <div >
      <div className='flex m-4'><MdOutlineLightbulb className='mr-4' size='1.5rem'/><p className={drawerWidth()}>メモ</p></div>
      <div className='flex m-4'><BiBell className='mr-4' size='1.5rem'/><p className={drawerWidth()}>リマインダー</p></div>
      <div className='flex m-4'><BiTag className='mr-4' size='1.5rem'/><p className={drawerWidth()}>料理</p></div>
      <div className='flex m-4'><BsPencil className='mr-4' size='1.5rem'/><p className={drawerWidth()}>ラベルの編集</p></div>
      <div className='flex m-4'><RiInboxArchiveLine className='mr-4' size='1.5rem'/><p className={drawerWidth()}>アーカイブ</p></div>
      <div className='flex m-4'><BiTrash className='mr-4' size='1.5rem'/><p className={drawerWidth()}>ゴミ箱</p></div>
    </div>
  );
}

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




  const toggleMenuIsOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <div className="App">
      <Header toggleMenuIsOpen={toggleMenuIsOpen}/>
      <div className="flex flex-row w-screen">
        <Drawer menuIsOpen={menuIsOpen}/>
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
