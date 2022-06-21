import { Header } from './Header';
import { Drawer } from './Drawer';
import React, { useState } from 'react';
import { Memo } from '../App';
import { Home } from './Home';

  export const TodoTop = (props:{ memoList: Memo[], setMemoList:any, }) => {
    const { memoList, setMemoList } = props;
    const [inputText,setInputText] = useState('');
    const [inputTitle,setInputTitle] = useState('');
    const [menuIsOpen, setMenuIsOpen] = useState(true);
    const [displayIsList, setDisplayIsList] = useState<boolean>(false);

    const onChangeInputText = (e:React.ChangeEvent<HTMLInputElement>) =>{
      setInputText(e.target.value)
    }

    const onChangeInputTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value)
    }



    const onClickAdd = () => {
      if (inputText === '' && inputTitle === '') return;
      const newMemos = [...memoList, { title: inputTitle, body: inputText }];
      setMemoList(newMemos);
      updateStoredMemos(newMemos);
      setInputText('');
      setInputTitle('');
    };

    const onClickDelete = (index:number) => {
      const newMemos = [...memoList];
      newMemos.splice(index,1);
      setMemoList(newMemos);
      updateStoredMemos(newMemos);
    }

    const toggleDisplayIsList = () => {
      setDisplayIsList(!displayIsList);
    }


    const toggleMenuIsOpen = () => {
      setMenuIsOpen(!menuIsOpen);
    }

    // ローカルストレージのキーのstoredMemosに追加される
    const updateStoredMemos = (updatedMemos: Memo[]) => {
      localStorage.setItem('storedMemos', JSON.stringify(updatedMemos));
    }


    return(
      <>
        <Header toggleMenuIsOpen={toggleMenuIsOpen} toggleDisplayIsList={toggleDisplayIsList} displayIsList={displayIsList}/>
        <div className="flex flex-row w-screen">
          <Drawer menuIsOpen={menuIsOpen}/>
          <div className="flex flex-col w-full justify-items-center">
            <Home inputText={inputText} onChangeInputText={onChangeInputText} onClickAdd={onClickAdd}
                  inputTitle={inputTitle} onChangeInputTitle={onChangeInputTitle}
                  memoList={memoList}
                  displayIsList={displayIsList}
                  onClickDelete={onClickDelete}/>
          </div>
        </div>
      </>
  );
}
