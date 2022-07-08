import React, { useState } from 'react';
import { Memo } from '../../App';
import { MemoDetailModal } from './MemoDetailModal';
import { PinButton } from './PinButton';
import { OtherActionsDropdown } from './OtherActionsDropdown';
import { ArchiveButton } from './ArchiveButton';
import { TrashIcons } from './TrashIcons';


type MemoListProps = {
  title: '固定済み' | 'その他' | 'アーカイブ' | 'ゴミ箱',
  memoList: Memo[],
  displayIsList: boolean,
  onClickDelete: (index: number) => void,
  toggleMemoIsFixed:(index:number, event: React.MouseEvent<HTMLButtonElement>) => void,
  toggleMemoIsArchived:(index:number) => void,
  toggleMemoIsTrash:(index:number) => void,
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
    <div className={listWidth()}>
      <p className='p-3 text-xs'>{props.title}</p>
      <div className={' grid gap-4 ' + gridCols()}>
        {props.memoList.map((memo: Memo,index:number) => {
          return(
            <div key={index} >
              <div
                   className="flex flex-col p-4 rounded-md mx-auto border border-gray-40
                   hover:shadow-md
                   hover:shadow-gray-300 ">
                <div onClick={() => openModal(memo)}>
                  <nav className="flex justify-between">
                    <div>{memo.title}</div>
                    <PinButton toggleMemoIsFixed={props.toggleMemoIsFixed} memo={memo} />
                  </nav>
                  <div className='py-4'>{memo.body}</div>
                </div>
                <div className="flex justify-between">
                  {memo.isTrashed ?
                    "" :
                    <>
                      <OtherActionsDropdown toggleMemoIsTrash={props.toggleMemoIsTrash} memo={memo} />
                      <ArchiveButton toggleMemoIsArchived={props.toggleMemoIsArchived} memo={memo}/>
                    </>}
                  {memo.isTrashed ? <TrashIcons onClickDelete={props.onClickDelete}
                                                toggleMemoIsTrash={props.toggleMemoIsTrash}
                                                memo={memo}/> : " "}
                </div>
              </div>
            </div>
          );
        })}
        <MemoDetailModal
          memo={modalMemo} closeModal={closeModal}
          toggleMemoIsFixed={props.toggleMemoIsFixed}
          toggleMemoIsArchived={props.toggleMemoIsArchived}
          toggleMemoIsTrash={props.toggleMemoIsTrash}/>
      </div>
    </div>
  );
}
