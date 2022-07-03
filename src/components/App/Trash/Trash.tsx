import React from 'react';
import { useMemoListContent } from '../MemoTop/MemoTop';
import { Memo } from '../App';
import { MemoList } from '../Home/MemoList/MemoList';


export const Trash = () => {
  const { memoList, displayIsList, onClickDelete, toggleMemoIsFixed, toggleMemoIsArchived, toggleMemoIsTrash } = useMemoListContent();

  const trashMemoList = (memoList:Memo[]) => {
    return memoList.filter((memo)=> memo.isTrashed)
  }

  return(
    <MemoList
      title='ゴミ箱'
      memoList={trashMemoList(memoList)}
      displayIsList={displayIsList}
      onClickDelete={onClickDelete}
      toggleMemoIsFixed={toggleMemoIsFixed}
      toggleMemoIsArchived={toggleMemoIsArchived}
      toggleMemoIsTrash={toggleMemoIsTrash}
    />
  );
}
