import React from 'react';
import { useMemoListContent } from '../MemoTop/MemoTop';
import { Memo } from '../App';
import { MemoList } from '../Home/MemoList/MemoList';


export const Trash = () => {
  const { memoList, displayIsList, deleteCompletely, toggleMemoIsFixed, toggleMemoIsArchived, toggleMemoIsTrash,toggleMemoIsColor } = useMemoListContent();

  const trashMemoList = (memoList:Memo[]) => {
    return memoList.filter((memo)=> memo.isTrashed)
  }

  return(
    <MemoList
      title='ゴミ箱'
      memoList={trashMemoList(memoList)}
      displayIsList={displayIsList}
      deleteCompletely={deleteCompletely}
      toggleMemoIsFixed={toggleMemoIsFixed}
      toggleMemoIsArchived={toggleMemoIsArchived}
      toggleMemoIsTrash={toggleMemoIsTrash}
      toggleMemoIsColor={toggleMemoIsColor}
    />
  );
}
