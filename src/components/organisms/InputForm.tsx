import React, { useState } from 'react';

type InputFormType = {
  inputText: string,
  onChangeInputText: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onClick: () => void,
  inputTitle: string,
  onChangeInputTitle: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const InputForm = (props:InputFormType) => {
  const {inputText,onChangeInputText,onClick,inputTitle,onChangeInputTitle} = props;

  const [inputFormType,setInputFormType] = useState<boolean>(false);

  const onClickForm = () => {
    setInputFormType(!inputFormType)
  }
  return(
    <div
      className="flex w-1/2 justify-between px-5 rounded-md
      mx-auto	border-2 border-gray-300 m-8 shadow-lg shadow-gray-300 ">
      <div className="flex flex-col">
        <input type="text" value={inputTitle} onChange={onChangeInputTitle}  placeholder="タイトル"/>
        <input type="text" value={inputText} onChange={onChangeInputText} placeholder="メモを入力" />
        <button onClick={onClickForm}>切り替え</button>
      </div>
      <button onClick={onClick} className=" py-2 px-4 rounded hover:bg-gray-300">作成</button>
    </div>
  );
}
