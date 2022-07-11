import React, { useRef, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { PinIcon } from '../../shared/atoms/PinIcon';

type InputFormType = {
  onClick: (title: string, body: string) => void,
}

export const InputForm = (props:InputFormType) => {
  const {onClick,} = props;

  const [isLargeForm,setIsLargeForm] = useState<boolean>(true);
  const bodyRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);

  const toggleIsLargeForm = () => {
    setIsLargeForm(!isLargeForm)
  }

  const Form = () => {
    return( isLargeForm ? <ClosedForm/>:<OpenedForm />);
  }
  const close = () => {
    const title = titleRef.current ? titleRef.current.value : '';
    const body = bodyRef.current ? bodyRef.current.value : '';
    onClick(title, body);
  }

  const ClosedForm = () => {
    return(
      <>
        <div className="placeholder:text-slate-800 text-base " onClick={toggleIsLargeForm}>メモを入力...</div>
      </>
    );
  }

  //TODO OpenedFormの外側をクリックしたら閉じたい
  const OpenedForm = () => {
    return(
      <div>
        <div className="flex justify-between">
          <input className="placeholder:text-slate-800 text-base " type="text" ref={titleRef} placeholder="タイトル"/>
          <button className=" p-2 group hover:bg-slate-200 rounded-full relative">
            <PinIcon isFixed={false}/>
          </button>
        </div>
        {/*TODO 複数行入力できるようにしたい*/}
        <input className="placeholder:text-slate-800 text-base "
               type="text"
               autoFocus={true}
               ref={bodyRef}
               placeholder="メモを入力..." />
        <div className="flex justify-between">
          <button className=" p-2 group hover:bg-gray-200 rounded-full relative">
            <RiInboxArchiveLine size='1.1rem'/>
            <span className="invisible opacity-0 py-1 w-[70px] rounded text-[12px] font-bold text-white  bg-slate-600 group-hover:visible opacity-100 absolute top-9 -right-4">アーカイブ</span>
          </button>
          <button className=" p-2 group hover:bg-gray-200 rounded-full relative">
            <BsThreeDotsVertical size='1.1rem'/>
            <span className="invisible opacity-0 py-1 w-[120px] rounded text-[12px] font-bold text-white  bg-slate-600 group-hover:visible opacity-100 absolute top-9 -right-4">その他のアクション</span>
          </button>
          <button onClick={() => {toggleIsLargeForm();close();}} className="px-4 hover:bg-gray-100">閉じる</button>
        </div>
      </div>
    );
  }

  return(
    <>
      <div
        className=" w-3/5  px-5 py-2 rounded-md max-w-md
      mx-auto	border-2 border-gray-300 m-8 shadow-lg shadow-gray-300 ">
        <div className="flex flex-col">
          {Form()}
        </div>
      </div>
    </>
  );
}


