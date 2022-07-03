import { Header } from './Header/Header';
import { Drawer } from './Drawer/Drawer';
import React, {  useState } from 'react';
import { Memo } from '../App';
import { InputForm } from './Content/InputForm';
import { MemoList } from './Content/MemoList/MemoList';

  export const MemoTop = (props:{ memoList: Memo[], setMemoList: (newMemos: Memo[])=> void, }) => {
    const { memoList, setMemoList } = props;
    const [menuIsOpen, setMenuIsOpen] = useState(true);
    const [displayIsList, setDisplayIsList] = useState<boolean>(false);

    const addNewMemo = (inputTitle: string, inputText: string) => {
      if (inputText === '' && inputTitle === '') return;
      const newMemos = [...memoList,
        { id:new Date().getTime(),title: inputTitle, body: inputText ,isFixed:false, pinnedAt: 0, isArchived:false, trash: false}];
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
    }

    const toggleMemoIsFixed = (id:number, event: React.MouseEvent<HTMLButtonElement>) => {
      const newMemos = [...memoList];
      const index = newMemos.findIndex((memo) => memo.id === id);
      event.stopPropagation(); // NOTE: onClickイベントを親要素に伝播させないため(モーダルを反応させない)
      newMemos[index].isFixed = !newMemos[index].isFixed
      newMemos[index].pinnedAt = new Date().getTime();
      setMemoList(newMemos);
      updateStoredMemos(newMemos);
    }

    const toggleMemoIsArchived = (id:number) => {
      const newMemos = [...memoList];
      const index = newMemos.findIndex((memo) => memo.id === id);
      newMemos[index].isArchived = !newMemos[index].isArchived
      setMemoList(newMemos);
      updateStoredMemos(newMemos);
    }

    const toggleMemoIsTrash = (id:number) => {
      const newMemos = [...memoList];
      const index = newMemos.findIndex((memo) => memo.id === id);
      newMemos[index].trash = !newMemos[index].trash
      setMemoList(newMemos);
      updateStoredMemos(newMemos);
    }

    const onClickDelete = (id:number) => {
      const newMemos = [...memoList];
      const index = newMemos.findIndex((memo) => memo.id === id);
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
      return memoList.filter((memo) => memo.isFixed && !memo.isArchived && !memo.trash)
        .sort((a,b)=> b.pinnedAt - a.pinnedAt); // NOTE: 新しい順に並べる
    }
    const unFixedMemoList = (memoList:Memo[])=>{
      return memoList.filter((memo) => !memo.isFixed && !memo.isArchived && !memo.trash)
        .sort((a,b)=> b.pinnedAt - a.pinnedAt);
    }
    const archivedMemoList = (memoList:Memo[]) => {
      return memoList.filter((memo)=> memo.isArchived && !memo.trash)
    }
    const trashMemoList = (memoList:Memo[]) => {
      return memoList.filter((memo)=> memo.trash)
    }


    return(
      <>
        <Header toggleMenuIsOpen={toggleMenuIsOpen} toggleDisplayIsList={toggleDisplayIsList} displayIsList={displayIsList}/>
        <div className="flex flex-row w-screen">
          <Drawer menuIsOpen={menuIsOpen}/>
          <div className="flex flex-col w-full justify-items-center">
            Home
            <InputForm onClick={addNewMemo}/>
            <MemoList
              title='固定済み'
              memoList={fixedMemoList(memoList)}
              displayIsList={displayIsList}
              onClickDelete={onClickDelete}
              toggleMemoIsFixed={toggleMemoIsFixed}
              toggleMemoIsArchived={toggleMemoIsArchived}
              toggleMemoIsTrash={toggleMemoIsTrash}
            />
            <MemoList
              title='その他'
              memoList={unFixedMemoList(memoList)}
              displayIsList={displayIsList}
              onClickDelete={onClickDelete}
              toggleMemoIsFixed={toggleMemoIsFixed}
              toggleMemoIsArchived={toggleMemoIsArchived}
              toggleMemoIsTrash={toggleMemoIsTrash}
            />
            <MemoList
              title='アーカイブ'
              memoList={archivedMemoList(memoList)}
              displayIsList={displayIsList}
              onClickDelete={onClickDelete}
              toggleMemoIsFixed={toggleMemoIsFixed}
              toggleMemoIsArchived={toggleMemoIsArchived}
              toggleMemoIsTrash={toggleMemoIsTrash}
            />
            <MemoList
              title='ゴミ箱'
              memoList={trashMemoList(memoList)}
              displayIsList={displayIsList}
              onClickDelete={onClickDelete}
              toggleMemoIsFixed={toggleMemoIsFixed}
              toggleMemoIsArchived={toggleMemoIsArchived}
              toggleMemoIsTrash={toggleMemoIsTrash}
            />
          </div>
        </div>
      </>
  );
}
