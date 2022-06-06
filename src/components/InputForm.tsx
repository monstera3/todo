import React from 'react';

export const InputForm = (props:any) => {
  const {inputText,onChange,onClick} = props;
  return(
    <div className="flex w-1/2 justify-between px-5 rounded-md mx-auto	border border-gray-300 m-8 shadow-lg shadow-gray-300/50 ">
      <div className="flex flex-col">
        <input type="text"  placeholder="タイトル"/>
        <input type="text" value={inputText} onChange={onChange} placeholder="メモを入力" />
      </div>
      <button onClick={onClick} className=" py-2 px-4 rounded hover:bg-gray-300">作成</button>
    </div>
  );
}
