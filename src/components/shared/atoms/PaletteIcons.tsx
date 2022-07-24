import React from 'react';
import { MdOutlineColorLens } from 'react-icons/md';

export const PaletteIcons = () => {
  return (
    <>
      <MdOutlineColorLens size='1.2rem'/>
      <span className="invisible opacity-0 p-1 w-max rounded text-[12px] font-bold text-white  bg-slate-600 group-hover:visible opacity-100 absolute top-[100%] -translate-x-1/2 z-20 ">
        その他のアクション
      </span>
    </>
  )
}
