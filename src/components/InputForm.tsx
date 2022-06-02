import React from 'react';

export const InputForm = (props:any) => {
  const {inputText,onChange,onClick} = props;
  return(
    <div className="flex box  w-96 justify-between px-5 py-2 rounded-full mx-auto	border-2 border-indigo-600 m-8">
      <input value={inputText} onChange={onChange} type="text" placeholder="TODOを入力" className=" px-8 rounded-full"/>
      <button onClick={onClick} className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-100">作成</button>
    </div>
  );
}
