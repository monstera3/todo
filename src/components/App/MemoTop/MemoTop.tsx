import { Header } from './Header/Header';
import { Drawer } from './Drawer/Drawer';
import React, { useState } from 'react';
import { Memo } from '../App';
import { InputForm } from '../Home/InputForm';
import { Outlet, useOutletContext } from 'react-router-dom';

type MemoListContextType = {
  memoList: Memo[],
  displayIsList: boolean,
  deleteCompletely: (index: number) => void,
  toggleMemoIsFixed: (index: number, event: React.MouseEvent<HTMLButtonElement>) => void,
  toggleMemoIsArchived: (index: number) => void,
  toggleMemoIsTrash: (index: number,event: React.MouseEvent<HTMLButtonElement>) => void,
  toggleMemoIsColor: (index: number,color:string, event: React.MouseEvent<HTMLButtonElement>) => void,
  updateMemo:(id: number, title: string, body: string) => void,
};

export const MemoTop = (props: { storedMemoList:Memo[] }) => {
  const [memoList, setMemoList] = useState<Memo[]>(props.storedMemoList);
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const [displayIsList, setDisplayIsList] = useState<boolean>(false);

  const addNewMemo = (inputTitle: string, inputText: string) => {
    if (inputText === '' && inputTitle === '') return;
    const newMemos = [...memoList,
      {
        id: new Date().getTime(),
        title: inputTitle,
        body: inputText,
        isFixed: false,
        pinnedAt: 0,
        isArchived: false,
        isTrashed: false,
        color: 'white',
      }];
    setMemoList(newMemos);
    updateStoredMemos(newMemos);
  };

  const updateMemo = (id: number, title: string, body: string) => {
    if (title === '' && body === '') return;
    const newMemos = [...memoList];
    const index = newMemos.findIndex((memo: Memo) => memo.id === id);
    newMemos[index].title = title;
    newMemos[index].body = body;
    setMemoList(newMemos);
    updateStoredMemos(newMemos);
    debugger
  }

  const toggleMemoIsFixed = (id: number, event: React.MouseEvent<HTMLButtonElement>) => {
    const newMemos = [...memoList];
    const index = newMemos.findIndex((memo) => memo.id === id);
    event.stopPropagation(); // NOTE: onClickイベントを親要素に伝播させないため(モーダルを反応させない)
    newMemos[index].isFixed = !newMemos[index].isFixed
    newMemos[index].pinnedAt = new Date().getTime();
    setMemoList(newMemos);
    updateStoredMemos(newMemos);
  }

  const toggleMemoIsColor = (id: number,color:string, event: React.MouseEvent<HTMLButtonElement>) => {
    const newMemos = [...memoList];
    const index = newMemos.findIndex((memo) => memo.id === id);
    event.stopPropagation(); // NOTE: onClickイベントを親要素に伝播させないため(モーダルを反応させない)
    newMemos[index].color = color
    newMemos[index].pinnedAt = new Date().getTime();
    setMemoList(newMemos);
    updateStoredMemos(newMemos);
}

  const toggleMemoIsArchived = (id: number) => {
    const newMemos = [...memoList];
    const index = newMemos.findIndex((memo) => memo.id === id);
    newMemos[index].isArchived = !newMemos[index].isArchived
    setMemoList(newMemos);
    updateStoredMemos(newMemos);
  }

  const toggleMemoIsTrash = (id: number,event: React.MouseEvent<HTMLButtonElement>) => {
    const newMemos = [...memoList];
    const index = newMemos.findIndex((memo) => memo.id === id);
    event.stopPropagation();
    newMemos[index].isTrashed = !newMemos[index].isTrashed
    setMemoList(newMemos);
    updateStoredMemos(newMemos);
  }

  const deleteCompletely = (id: number) => {
    const newMemos = [...memoList];
    const index = newMemos.findIndex((memo) => memo.id === id);
    newMemos.splice(index, 1);
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


  return (
    <>
      <Header toggleMenuIsOpen={toggleMenuIsOpen} toggleDisplayIsList={toggleDisplayIsList}
              displayIsList={displayIsList} />
      <div className="flex flex-row w-screen">
        <Drawer menuIsOpen={menuIsOpen} />
        <div className="flex flex-col w-full justify-items-center">
          <InputForm onClick={addNewMemo}/>
          <Outlet context={{
            memoList: memoList,
            displayIsList: displayIsList,
            deleteCompletely: deleteCompletely,
            toggleMemoIsFixed: toggleMemoIsFixed,
            toggleMemoIsArchived: toggleMemoIsArchived,
            toggleMemoIsTrash: toggleMemoIsTrash,
            toggleMemoIsColor: toggleMemoIsColor,
            updateMemo: updateMemo,
          }}/>
        </div>
      </div>
    </>
  );
}

export function useMemoListContent() {
  return useOutletContext<MemoListContextType>();
}
