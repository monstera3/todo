import React, { useState } from 'react';
import { Memo } from '../../App';
import { MemoDetailModal } from '../pages/MemoDetailModal';


type MemoListProps = {
  memoList: Memo[],
  displayIsList: boolean,
  onClickDelete: (index: number) => void,
}

export const MemoList = (props: MemoListProps) => {
  const [modalMemo, setModalMemo] = useState<Memo | null>(null);

  const closeModal = () => {
    setModalMemo(null);
  }

  const openModal = (memo:Memo) => {
    setModalMemo(memo);
  }

  const gridCols = () => {
    return props.displayIsList ? 'grid-cols-1' : 'sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6';
  }

  const listWidth = () => {
    return props.displayIsList ? 'w-2/3 ' : 'w-11/12 ';

  }


  return(
    <div>
      <p>固定済み</p>
      <div className={ listWidth() +' grid gap-4 ' + gridCols()} >
        {props.memoList.map((memo: Memo,index:number) => {
          return(
            <div key={index} onClick={() => openModal(memo)}>
              <div className="flex flex-col p-2 rounded-md mx-auto my-8 border border-gray-40
              hover:shadow-md
              hover:shadow-gray-300 ">
                  <div>{memo.title}</div>
                  <div>{memo.body}</div>
                <button
                  className="hover:bg-gray-300"
                  onClick={() => props.onClickDelete(index)} >削除</button>
              </div>
              <MemoDetailModal memo={modalMemo} closeModal={closeModal} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
