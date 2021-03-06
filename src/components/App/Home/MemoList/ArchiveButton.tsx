import React from 'react';
import { Memo } from '../../App';
import { ArchiveIcon } from '../../../shared/atoms/ArchiveIcon';

export const ArchiveButton = (props:{  toggleMemoIsArchived:(index:number) => void, memo: Memo }) => {
  return(
    <button onClick={()=> props.toggleMemoIsArchived(props.memo.id)}
            className=" p-2 group hover:bg-gray-200 rounded-full relative">
      <ArchiveIcon isArchived={props.memo.isArchived}/>
    </button>
  );
}
