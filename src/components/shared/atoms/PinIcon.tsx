import { BsPin, BsPinFill } from 'react-icons/bs';
import React from 'react';

export const PinIcon = (props: { isFixed: boolean }) => {
  return (
    <>
      {props.isFixed ? <BsPinFill size='1.2rem'/> : <BsPin size='1.2rem'/>}
      <span className="invisible opacity-0 p-1 w-max rounded text-[12px] font-bold text-white  bg-slate-600 group-hover:visible opacity-100 absolute top-[100%] -translate-x-1/2 ">
        {props.isFixed ? 'メモの固定を解除' : 'メモを固定'}
      </span>
    </>
  );
}
