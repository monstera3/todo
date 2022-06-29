import { RiInboxArchiveLine, RiInboxUnarchiveLine } from 'react-icons/ri';
import React from 'react';

export const ArchiveIcon = (props: { isArchived: boolean } ) => {
  return (
    <>
      {props.isArchived ? <RiInboxUnarchiveLine size='1.1rem'/> : <RiInboxArchiveLine size='1.1rem'/>}
      <span className="invisible opacity-0 p-1 w-max rounded text-[12px] font-bold text-white  bg-slate-600
                      group-hover:visible opacity-100 absolute top-[100%] -translate-x-1/2">
                      {props.isArchived ? 'アーカイブを解除します' : 'アーカイブ'}
                      </span>
    </>
  );
}
