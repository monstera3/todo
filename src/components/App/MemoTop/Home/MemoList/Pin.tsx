import { BsPin, BsPinFill } from 'react-icons/bs';
import React from 'react';
import { Memo } from '../../../App';

export const Pin = (props:{  isFixed: boolean,toggleMemoIsFixed: any, memo: Memo }) => {
  return(
    <button onClick={(event: React.MouseEvent<HTMLButtonElement>)=> props.toggleMemoIsFixed(props.memo.id, event)}
            className=" p-2 group hover:bg-slate-200 rounded-full relative">
      <div>
        {props.isFixed ? <BsPinFill size='1.2rem'/> : <BsPin size='1.2rem'/>}
        <span className="invisible opacity-0 p-1 w-max rounded text-[12px] font-bold text-white  bg-slate-600
                      group-hover:visible opacity-100 absolute top-[100%] -translate-x-1/2 ">{props.isFixed ? 'メモの固定を解除' : 'メモを固定'}</span>
      </div>
    </button>
  );
}
