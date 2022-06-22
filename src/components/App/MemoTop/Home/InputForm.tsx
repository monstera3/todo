import React, { useState } from 'react';
import { BsPin, BsThreeDotsVertical } from 'react-icons/bs';
import { RiInboxArchiveLine } from 'react-icons/ri';

type InputFormType = {
  onClick: (title: string, body: string) => void,
}

export const InputForm = (props:InputFormType) => {
  const {onClick} = props;

  const [inputFormType,setInputFormType] = useState<boolean>(true);
  const [inputText,setInputText] = useState('');
  const [inputTitle,setInputTitle] = useState('');

  const onChangeInputText = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setInputText(e.target.value)
  }

  const onChangeInputTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value)
  }

  const onClickForm = () => {
    setInputFormType(!inputFormType)
  }

  const FormType = () => {
    return( inputFormType ? <FormTypeClose/>:<FormTypeOpen/>);
  }
  const close = () => {
    onClick(inputTitle, inputText);
    setInputText('');
    setInputTitle('');
  }

  const FormTypeClose = () => {
    return(
      <>
        <div className="placeholder:text-slate-800 text-base " onClick={onClickForm}>メモを入力...</div>
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
            <span className="invisible opacity-0 py-1 w-[70px] rounded text-[12px] font-bold text-white  bg-slate-600
                      group-hover:visible opacity-100 absolute top-9 -right-4">メモを固定</span>
          </button>
        </div>
        {/*//TODO メモを入力の文字を連続で入力したい*/}
        <input className="placeholder:text-slate-800 text-base "
               type="text"
               value={inputText}
               onChange={onChangeInputText}
               placeholder="メモを入力..." />
        <div className="flex justify-between">
          <button className=" p-2 group hover:bg-gray-200 rounded-full relative">
            <RiInboxArchiveLine size='1.1rem'/>
            <span className="invisible opacity-0 py-1 w-[70px] rounded text-[12px] font-bold text-white  bg-slate-600
                      group-hover:visible opacity-100 absolute top-9 -right-4">アーカイブ</span>
          </button>
          <button className=" p-2 group hover:bg-gray-200 rounded-full relative">
            <BsThreeDotsVertical size='1.1rem'/>
            <span className="invisible opacity-0 py-1 w-[120px] rounded text-[12px] font-bold text-white  bg-slate-600
                      group-hover:visible opacity-100 absolute top-9 -right-4">その他のアクション</span>
          </button>
          <button onClick={() => {onClickForm();close();}} className="px-4 hover:bg-gray-100">閉じる</button>
        </div>
      </div>
    );
  }

  return(
    <>
      <div
        className="flex w-80 justify-between px-5 py-2 rounded-md
      mx-auto	border-2 border-gray-300 m-8 shadow-lg shadow-gray-300 ">
        <div className="flex flex-col">
          {FormType()}
        </div>
      </div>
    </>
  );
}


