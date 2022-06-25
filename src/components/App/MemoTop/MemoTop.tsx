import { Header } from './Header/Header';
import { Drawer } from './Drawer/Drawer';
import React, { useState } from 'react';
import { Memo } from '../App';
import { InputForm } from './Home/InputForm';
import { MemoList } from './Home/MemoList/MemoList';

  export const MemoTop = (props:{ memoList: Memo[], setMemoList:any, }) => {
    const { memoList, setMemoList } = props;
    const [menuIsOpen, setMenuIsOpen] = useState(true);
    const [displayIsList, setDisplayIsList] = useState<boolean>(false);

    const onClickAdd = (inputTitle: string, inputText: string) => {
      if (inputText === '' && inputTitle === '') return;
      const newMemos = [...memoList, { id:new Date().getTime(),title: inputTitle, body: inputText ,isFixed:false}];
      setMemoList(newMemos);
      updateStoredMemos(newMemos);
    };

    const toggleMemoIsFixed = (id:number) => {
      const newMemos = [...memoList];
      const index = newMemos.findIndex((memo) => memo.id === id);
      newMemos[index].isFixed = !newMemos[index].isFixed
      setMemoList(newMemos);
      updateStoredMemos(newMemos);
    }

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

    const fixedMemoList = (memoList:Memo[])=>{
      return memoList.filter((memo) => memo.isFixed);
    }
    const unFixedMemoList = (memoList:Memo[])=>{
      return memoList.filter((memo) => !memo.isFixed);
    }

    return(
      <>
        <Header toggleMenuIsOpen={toggleMenuIsOpen} toggleDisplayIsList={toggleDisplayIsList} displayIsList={displayIsList}/>
        <div className="flex flex-row w-screen">
          <Drawer menuIsOpen={menuIsOpen}/>
          <div className="flex flex-col w-full justify-items-center">
            Home
            <InputForm onClick={onClickAdd}/>
            <MemoList
              title='固定済み'
              memoList={fixedMemoList(memoList)}
              displayIsList={displayIsList}
              onClickDelete={onClickDelete}
              toggleMemoIsFixed={toggleMemoIsFixed}
            />
            <MemoList
              title='その他'
              memoList={unFixedMemoList(memoList)}
              displayIsList={displayIsList}
              onClickDelete={onClickDelete}
              toggleMemoIsFixed={toggleMemoIsFixed}
            />
          </div>
        </div>
      </>
  );
}
