import { BsPin } from 'react-icons/bs';
import React from 'react';


export const FixedMemoList = () => {
  return(
    <div>固定済み
      <div
        className="flex flex-col p-2 rounded-md mx-auto my-8 border border-gray-40
                   hover:shadow-md
                   hover:shadow-gray-300 ">
          <nav className="flex justify-between">
            <button className=" p-2 group hover:bg-slate-200 rounded-full relative">
              <BsPin size='1.2rem'/>
              <span className="invisible opacity-0 py-1 w-[70px] rounded text-[12px] font-bold text-white  bg-slate-600
                      group-hover:visible opacity-100 absolute top-9 -right-4">メモを固定</span>
            </button>
          </nav>
        </div>
    </div>
  );
}
