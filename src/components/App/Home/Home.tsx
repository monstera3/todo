import React from 'react';
import { useMemoListContent } from '../MemoTop/MemoTop';
import { Memo } from '../App';
import { MemoList } from './MemoList/MemoList';


export const Home = () => {
  const { memoList, displayIsList, onClickDelete, toggleMemoIsFixed, toggleMemoIsArchived, toggleMemoIsTrash } = useMemoListContent();

  const fixedMemoList = (memoList:Memo[])=>{
    return memoList.filter((memo) => memo.isFixed && !memo.isArchived && !memo.isTrashed)
      .sort((a,b)=> b.pinnedAt - a.pinnedAt); // NOTE: 新しい順に並べる
  }
  const unFixedMemoList = (memoList:Memo[])=>{
    return memoList.filter((memo) => !memo.isFixed && !memo.isArchived && !memo.isTrashed)
      .sort((a,b)=> b.pinnedAt - a.pinnedAt);
  }

  return(
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
      <div className='mt-10'>
        <MemoList
          title='その他'
          memoList={unFixedMemoList(memoList)}
          displayIsList={displayIsList}
          onClickDelete={onClickDelete}
          toggleMemoIsFixed={toggleMemoIsFixed}
          toggleMemoIsArchived={toggleMemoIsArchived}
          toggleMemoIsTrash={toggleMemoIsTrash}
        />
      </div>

    </>
  );
}
