import React, { useState } from 'react';
import { Memo } from '../../../App';
import { MemoDetailModal } from './MemoDetailModal';
import { BsPin } from 'react-icons/bs';
import { BsPinFill } from 'react-icons/bs';


type MemoListProps = {
  title: '固定済み' | 'その他',
  memoList: Memo[],
  displayIsList: boolean,
  onClickDelete: (index: number) => void,
  toggleMemoIsFixed:(index:number) => void,
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
    return props.displayIsList ? 'grid-cols-1' : 'sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5';
  }

  const listWidth = () => {
    return props.displayIsList ? 'w-2/5 mx-auto' : 'w-11/12 m-auto';
  }


  const toggleFixedPin = (isFixed: boolean) => {
    return(
      <div>
        {isFixed ? <BsPinFill size='1.2rem'/> : <BsPin size='1.2rem'/>}
        <span className="invisible opacity-0 p-1 w-max rounded text-[12px] font-bold text-white  bg-slate-600
                      group-hover:visible opacity-100 absolute top-[100%] -translate-x-1/2 ">{isFixed ? 'メモの固定を解除' : 'メモを固定'}</span>
      </div>
    );
  }


  return(
    <div>
      <p>{props.title}</p>
      <div className={listWidth()+' grid gap-3 ' + gridCols()}>
        {props.memoList.map((memo: Memo,index:number) => {
          return(
            <div key={index} >
              <div
                   className="flex flex-col p-2 rounded-md mx-auto border border-gray-40
                   hover:shadow-md
                   hover:shadow-gray-300 ">
                <div onClick={() => openModal(memo)}>
                  <nav className="flex justify-between">
                    <div>{memo.title}</div>
                    <button onClick={()=> props.toggleMemoIsFixed(memo.id)}
                      className=" p-2 group hover:bg-slate-200 rounded-full relative">
                      {toggleFixedPin(memo.isFixed)}
                    </button>
                  </nav>
                  <div>{memo.body}</div>
                </div>
                <button
                  className="bg-white w-20 hover:bg-gray-300"
                  onClick={() => props.onClickDelete(memo.id)} >削除</button>
              </div>
            </div>
          );
        })}
        <MemoDetailModal memo={modalMemo} closeModal={closeModal} />
      </div>
    </div>
  );
}
