import React, { useState } from 'react';
import { BsPin } from 'react-icons/bs';
import { RiInboxArchiveLine } from 'react-icons/ri';

type InputFormType = {
  inputText: string,
  onChangeInputText: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onClick: () => void,
  inputTitle: string,
  onChangeInputTitle: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const InputForm = (props:InputFormType) => {
  const {inputText,onChangeInputText,onClick,inputTitle,onChangeInputTitle} = props;

  const [inputFormType,setInputFormType] = useState<boolean>(true);

  const onClickForm = () => {
    setInputFormType(!inputFormType)
  }

  const FormType = (isForm:boolean) => {
    return( isForm ? <FormTypeClose/>:<FormTypeOpen/>);
  }

  const FormTypeClose = () => {
    return(
      <>

      </>
    );
  }

    const FormTypeOpen = () => {
     return(
      <div>
        <div className="flex ">
          {/*//TODO タイトルの文字を連続で入力したい*/}
          <input className="placeholder:text-slate-800 text-base "
            type="text" value={inputTitle} onChange={onChangeInputTitle}  placeholder="タイトル"/>
          <button className=" p-2 group hover:bg-slate-200 rounded-full relative">
            <BsPin size='1.2rem'/>
            <span className="opacity-0 py-1 w-[70px] rounded text-[12px] font-bold text-white  bg-slate-600
                      group-hover:opacity-100 absolute top-9 -right-4">メモを固定</span>
          </button>
        </div>
        <button onClick={onClick} className=" py-2 px-4 rounded hover:bg-gray-300">作成</button>
        <div className="flex justify-between">
          <button className=" p-2 group hover:bg-gray-200 rounded-full relative">
            <RiInboxArchiveLine size='1.1rem'/>
            <span className="opacity-0 py-1 w-[70px] rounded text-[12px] font-bold text-white  bg-slate-600
                      group-hover:opacity-100 absolute top-9 -right-4">アーカイブ</span>
          </button>
          <button onClick={onClickForm} className="px-4 hover:bg-gray-100">閉じる</button>
        </div>
      </div>
    );
  }

  return(
    <>
      <div
        className="flex w-1/2 justify-between px-5 py-2 rounded-md
      mx-auto	border-2 border-gray-300 m-8 shadow-lg shadow-gray-300 ">
        <div className="flex flex-col">
          <input className="placeholder:text-slate-800 text-base "
            onClick={onClickForm} type="text" value={inputText} onChange={onChangeInputText} placeholder="メモを入力..." />
          {FormType(inputFormType)}
        </div>
      </div>
    </>
  );
}


