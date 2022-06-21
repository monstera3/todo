import React, { useState } from 'react';
import { Memo } from '../../../App';
import { MemoDetailModal } from './MemoDetailModal';
import { BsPin } from 'react-icons/bs';


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
      <p>その他</p>
      <div className={ listWidth() +' grid gap-4 ' + gridCols()} >
        {props.memoList.map((memo: Memo,index:number) => {
          return(
            <div key={index} >
              <div
                   className="flex flex-col p-2 rounded-md mx-auto my-8 border border-gray-40
                   hover:shadow-md
                   hover:shadow-gray-300 ">
                <div onClick={() => openModal(memo)}>
                  <nav className="flex justify-between">
                    <div>{memo.title}</div>
                    <button className=" p-2 group hover:bg-slate-200 rounded-full relative">
                      <BsPin size='1.2rem'/>
                      <span className="opacity-0 py-1 w-[70px] rounded text-[12px] font-bold text-white  bg-slate-600
                      group-hover:opacity-100 absolute top-9 -right-4">メモを固定</span>
                    </button>
                  </nav>
                  <div>{memo.body}</div>
                </div>
                <button
                  className="hover:bg-gray-300"
                  onClick={() => props.onClickDelete(index)} >削除</button>
              </div>
            </div>
          );
        })}
        <MemoDetailModal memo={modalMemo} closeModal={closeModal} />
      </div>
    </div>
  );
}
