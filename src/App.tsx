import React, { ReactElement, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { Card } from './components/Card';
import { MdOutlineLightbulb } from 'react-icons/md';
import { BiBell, BiTag, BiTrash } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';
import { RiInboxArchiveLine } from 'react-icons/ri';

type Menu = {
  key: string,
  label: string,
  icon: ReactElement,
}

const menuList: Menu[] = [
  {
    key: 'menu',
    label: 'メニュー',
    icon: (<MdOutlineLightbulb className='mr-4' size='1.5rem'/>),
  },
  {
    key: 'reminder',
    label: 'リマインダー',
    icon: (<BiBell className='mr-4' size='1.5rem'/>),
  },
  {
    key: 'cooking',
    label: '料理',
    icon: (<BiTag className='mr-4' size='1.5rem'/>),
  },
  {
    key: 'editLabel',
    label: 'ラベルの編集',
    icon: (<BsPencil className='mr-4' size='1.5rem'/>),
  },
  {
    key: 'archive',
    label: 'アーカイブ',
    icon: (<RiInboxArchiveLine className='mr-4' size='1.5rem'/>),
  },
  {
    key: 'trashBox',
    label: 'ゴミ箱',
    icon: (<BiTrash className='mr-4' size='1.5rem'/>),
  },
];


const Drawer = (props:{menuIsOpen:boolean}) => {
  const drawerWidth = () => {
    return props.menuIsOpen ? "w-40" : "w-40 text-transparent ";
  }
  return(

    <div >
      {
        menuList.map((menu:Menu)=>{
          return(
            <div key={menu.key} className='flex m-4'>{menu.icon}<p className={drawerWidth()}>{menu.label}</p></div>
          )
          })
      }
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
