import React from 'react';

export const InputForm = (props:any) => {
  const {inputText,onChange,onClick} = props;
  return(
    <div className="flex box  w-96 justify-between px-5 py-2 rounded-md mx-auto	border border-gray-300 m-8 shadow-lg shadow-gray-300/50 ">
      <input value={inputText} onChange={onChange} type="text" placeholder="TODOを入力" className=" px-8 rounded-full"/>
      <button onClick={onClick} className=" py-2 px-4 rounded hover:bg-gray-300">作成</button>
    </div>
  );
}
