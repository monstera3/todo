import { Header } from './Header/Header';
import { Drawer } from './Drawer/Drawer';
import React, { useState } from 'react';
import { Memo } from '../App';
import { InputForm } from './Home/InputForm';
import { FixedMemoList } from './Home/FixedMemoList';
import { MemoList } from './Home/MemoList/MemoList';

  export const MemoTop = (props:{ memoList: Memo[], setMemoList:any, }) => {
    const { memoList, setMemoList } = props;
    const [menuIsOpen, setMenuIsOpen] = useState(true);
    const [displayIsList, setDisplayIsList] = useState<boolean>(false);

    const onClickAdd = (inputTitle: string, inputText: string) => {
      if (inputText === '' && inputTitle === '') return;
      const newMemos = [...memoList, { title: inputTitle, body: inputText }];
      setMemoList(newMemos);
      updateStoredMemos(newMemos);
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
            Home
            <InputForm onClick={onClickAdd}/>
            <FixedMemoList />
            <MemoList
              title='その他'
              memoList={memoList}
              displayIsList={displayIsList}
              onClickDelete={onClickDelete}
            />
          </div>
        </div>
      </>
  );
}
