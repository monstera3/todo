import React from 'react';
import { Memo } from '../../App';
import { FaTrash, FaTrashRestore } from 'react-icons/fa';

export const TrashIcons = (props:{  deleteCompletely: (index: number) => void,toggleMemoIsTrash:(index:number,event: React.MouseEvent<HTMLButtonElement>) => void, memo: Memo, }) => {
  return(
    <div className="flex ">
      <button onClick={()=> props.deleteCompletely(props.memo.id)}
              className="p-2 group hover:bg-gray-200 rounded-full relative">
        <FaTrash size='1rem' className="opacity-75"/>
        <span className="invisible opacity-0 p-1 w-max rounded text-[12px] font-bold text-white  bg-slate-600
                      group-hover:visible opacity-100 absolute top-[100%] -translate-x-1/2 z-20 ">完全に削除</span>
      </button>
      <button onClick={(event: React.MouseEvent<HTMLButtonElement>)=> props.toggleMemoIsTrash(props.memo.id,event)}
              className="p-2 group hover:bg-gray-200 rounded-full relative">
        <FaTrashRestore size='1rem' className="opacity-75"/>
        <span className="invisible opacity-0 p-1 w-max rounded text-[12px] font-bold text-white  bg-slate-600
                      group-hover:visible opacity-100 absolute top-[100%] -translate-x-1/2 z-20 ">復元</span>
      </button>
    </div>
  );
}
