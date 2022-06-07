import React, { useState } from 'react';
import { Drawer } from './components/templates/Drawer';
import './App.css';
import { Header } from './components/templates/Header';
import { InputForm } from './components/organisms/InputForm';
import { MemoList } from './components/templates/MemoList';



export type Memo = {
  title: string
  body: string
}
function App() {
  const [inputText,setInputText] = useState('');
  const [inputTitle,setInputTitle] = useState('');
  const [memoList,setMemoList] = useState<Memo[]>([{
    title:'',
    body:'',
  }]);
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const [displayIsList, setDisplayIsList] = useState<boolean>(false);

  const onChangeInputText = (e:any) =>{
    setInputText(e.target.value)
  }

  const onChangeInputTitle = (e:any) => {
    setInputTitle(e.target.value)
  }
  const onClickAdd = () => {
    const newMemos = [...memoList, { title: inputTitle, body: inputText }];
    setMemoList(newMemos);
    updateStoredMemos(newMemos);
    setInputText('');
    setInputTitle('');
  };

  const toggleDisplayIsList = () => {
    setDisplayIsList(!displayIsList);
  }


  const toggleMenuIsOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  //ローカルストレージのキーのstoredMemosに追加される
  const updateStoredMemos = (updatedMemos:string) => {
    localStorage.setItem('storedMemos', JSON.stringify(updatedMemos));
  }

  return (
    <div className="App">
      <Header toggleMenuIsOpen={toggleMenuIsOpen} toggleDisplayIsList={toggleDisplayIsList} displayIsList={displayIsList}/>
      <div className="flex flex-row w-screen">
        <Drawer menuIsOpen={menuIsOpen}/>
        <div className="flex flex-col w-full justify-items-center">
          <InputForm
            inputText={inputText} onChangeInputText={onChangeInputText} onClick={onClickAdd}
            inputTitle={inputTitle} onChangeInputTitle={onChangeInputTitle}
          />
          <MemoList memoList={memoList} displayIsList={displayIsList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
