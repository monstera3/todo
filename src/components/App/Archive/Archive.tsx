import { useMemoListContent } from '../MemoTop/MemoTop';
import { Memo } from '../App';
import React from 'react';
import { MemoList } from '../Home/MemoList/MemoList';

export const Archive = () => {
  const { memoList, displayIsList, deleteCompletely, toggleMemoIsFixed, toggleMemoIsArchived, toggleMemoIsTrash,toggleMemoIsColor, updateMemo } = useMemoListContent();

  const archivedMemoList = (memoList:Memo[]) => {
    return memoList.filter((memo)=> memo.isArchived && !memo.isTrashed)
  }

  return(
    <MemoList
      title='アーカイブ'
      memoList={archivedMemoList(memoList)}
      displayIsList={displayIsList}
      deleteCompletely={deleteCompletely}
      toggleMemoIsFixed={toggleMemoIsFixed}
      toggleMemoIsArchived={toggleMemoIsArchived}
      toggleMemoIsTrash={toggleMemoIsTrash}
      toggleMemoIsColor={toggleMemoIsColor}
      updateMemo={updateMemo}
    />
  );
}
