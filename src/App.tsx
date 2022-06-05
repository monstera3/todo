import React, { useState } from 'react';
import { Drawer } from './components/Drawer';
import './App.css';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { MemoList } from './components/MemoList';


function App() {
  const [inputText,setInputText] = useState('');
  const [memoList,setMemoList] = useState(['aa', 'bb', 'cc', 'dd', 'ee']);
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const [displayIsList, setDisplayIsList] = useState<boolean>(true);

  const onChangeInputText = (e:any) =>{
    setInputText(e.target.value)
  }

  const onClickAdd = () => {
    if (inputText === '')return;
    const newTasks = [...memoList, inputText];
    setMemoList(newTasks);
    setInputText('');
  };

  const toggleDisplayIsList = () => {
    setDisplayIsList(!displayIsList);
  }


  const toggleMenuIsOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <div className="App">
      <Header toggleMenuIsOpen={toggleMenuIsOpen} toggleDisplayIsList={toggleDisplayIsList} displayIsList={displayIsList}/>
      <div className="flex flex-row w-screen">
        <Drawer menuIsOpen={menuIsOpen}/>
        <div className="flex flex-col w-full justify-items-center">
          <InputForm
            inputText={inputText} onChange={onChangeInputText} onClick={onClickAdd}/>
          <MemoList memoList={memoList} displayIsList={displayIsList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
