import React from 'react';

export const InputForm = (props:any) => {
  const {inputText,onChange,onClick} = props;
  return(
    <div className="flex box bg-teal-300 w-96 justify-between px-5 rounded-md mx-auto	">
      <input value={inputText} onChange={onChange} type="text" placeholder="TODOを入力" className="bg-white px-8 rounded-full"/>
      <button onClick={onClick} className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-100">作成</button>
    </div>
  );
}
