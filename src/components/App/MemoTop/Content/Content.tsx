import { MemoList } from './MemoList/MemoList';
import React from 'react';
import { Memo } from '../../App';

type ContentProps = {
  displayIsList: boolean,
  onClickDelete: any,
  toggleMemoIsFixed: any,
  toggleMemoIsArchived: any,
  toggleMemoIsTrash: any,
  memoList: Memo[],
}

export const Content = (props: ContentProps) => {
  const { displayIsList, onClickDelete, toggleMemoIsFixed, toggleMemoIsArchived, toggleMemoIsTrash, memoList } = props;

  const fixedMemoList = (memoList:Memo[])=>{
    return memoList.filter((memo) => memo.isFixed && !memo.isArchived && !memo.isTrashed)
      .sort((a,b)=> b.pinnedAt - a.pinnedAt); // NOTE: 新しい順に並べる
  }
  const unFixedMemoList = (memoList:Memo[])=>{
    return memoList.filter((memo) => !memo.isFixed && !memo.isArchived && !memo.isTrashed)
      .sort((a,b)=> b.pinnedAt - a.pinnedAt);
  }
  const archivedMemoList = (memoList:Memo[]) => {
    return memoList.filter((memo)=> memo.isArchived && !memo.isTrashed)
  }
  const trashMemoList = (memoList:Memo[]) => {
    return memoList.filter((memo)=> memo.isTrashed)
  }

  return (
    <>
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
    </>
  )
}
