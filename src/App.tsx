import React, { useState } from 'react';
import { Drawer } from './components/Drawer';
import './App.css';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { MemoList } from './components/MemoList';



export type Memo = {
  title: string
  body: string
}
function App() {
  const [inputText,setInputText] = useState('');
  const [memoList,setMemoList] = useState<Memo[]>([{
    title:'',
    body:'',
}]);
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const [displayIsList, setDisplayIsList] = useState<boolean>(false);

  const onChangeInputText = (e:any) =>{
    setInputText(e.target.value)
  }

  const onClickAdd = () => {
    if (inputText === '')return;
    const newMemos = [...memoList, { title: inputText, body: inputText }];
    setMemoList(newMemos);
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
            inputText={inputText} onChange={onChangeInputText} onClick={onClickAdd}
          />
          <MemoList memoList={memoList} displayIsList={displayIsList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
