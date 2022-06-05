import React from 'react';

export const InputForm = (props:any) => {
  const {inputText,onChange,onClick} = props;
  return(
    <div className="flex w-96 justify-between px-5 rounded-md mx-auto	border border-gray-300 m-8 shadow-lg shadow-gray-300/50 ">
      <input value={inputText} onChange={onChange} type="text" placeholder="メモを入力" />
      <button onClick={onClick} className=" py-2 px-4 rounded hover:bg-gray-300">作成</button>
    </div>
  );
}
