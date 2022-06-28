import React, { useState } from 'react';
import { Memo } from '../../../App';
import { MemoDetailModal } from './MemoDetailModal';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { Pin } from './Pin';


type MemoListProps = {
  title: '固定済み' | 'その他' | 'アーカイブ',
  memoList: Memo[],
  displayIsList: boolean,
  onClickDelete: (index: number) => void,
  toggleMemoIsFixed:(index:number, event: React.MouseEvent<HTMLButtonElement>) => void,
  toggleMemoIsArchived:(index:number) => void,
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
                    <button onClick={(event: React.MouseEvent<HTMLButtonElement>)=> props.toggleMemoIsFixed(memo.id, event)}
                      className=" p-2 group hover:bg-slate-200 rounded-full relative">
                      {Pin(memo.isFixed)}
                    </button>
                  </nav>
                  <div>{memo.body}</div>
                </div>
                <div className="flex justify-between">
                  <button onClick={()=> props.toggleMemoIsArchived(memo.id)}
                    className=" p-2 group hover:bg-gray-200 rounded-full relative">
                    <RiInboxArchiveLine size='1.1rem'/>
                    <span className="invisible opacity-0 py-1 w-[70px] rounded text-[12px] font-bold text-white  bg-slate-600
                      group-hover:visible opacity-100 absolute top-9 -right-4">アーカイブ</span>
                  </button>
                  <button className=" p-2 group hover:bg-gray-200 rounded-full relative">
                    <BsThreeDotsVertical size='1.1rem'/>
                    <span className="invisible opacity-0 py-1 w-[120px] rounded text-[12px] font-bold text-white  bg-slate-600
                      group-hover:visible opacity-100 absolute top-9 -right-10">その他のアクション</span>
                  </button>
                  <button
                    className="bg-white w-20 hover:bg-gray-300"
                    onClick={() => props.onClickDelete(memo.id)} >削除</button>
                </div>
              </div>
            </div>
          );
        })}
        <MemoDetailModal memo={modalMemo} closeModal={closeModal} />
      </div>
    </div>
  );
}
