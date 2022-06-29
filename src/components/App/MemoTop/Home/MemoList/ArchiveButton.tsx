import React from 'react';
import { Memo } from '../../../App';
import { RiInboxArchiveLine, RiInboxUnarchiveLine } from 'react-icons/ri';

export const ArchiveButton = (props:{  toggleMemoIsArchived: any, memo: Memo }) => {
  return(
    <button onClick={()=> props.toggleMemoIsArchived(props.memo.id)}
            className=" p-2 group hover:bg-gray-200 rounded-full relative">
      {props.memo.isArchived ? <RiInboxUnarchiveLine size='1.1rem'/> : <RiInboxArchiveLine size='1.1rem'/>}
      <span className="invisible opacity-0 p-1 w-max rounded text-[12px] font-bold text-white  bg-slate-600
                      group-hover:visible opacity-100 absolute top-[100%] -translate-x-1/2">
                      {props.memo.isArchived ? 'アーカイブを解除します' : 'アーカイブ'}
                      </span>
    </button>
  );
}
