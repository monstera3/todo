import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Memo } from '../../../App';
import { BsPin, BsThreeDotsVertical } from 'react-icons/bs';
import { RiInboxArchiveLine } from 'react-icons/ri';


export const MemoDetailModal = (props:{ memo: Memo|null, closeModal: () => void ,}) => {
  const { memo, closeModal } = props;
  const [inputFormType,setInputFormType] = useState<boolean>(true);

  const modalIsOpen = (): boolean => {
    return !!memo;
  }
  const onClickForm = () => {
    setInputFormType(!inputFormType)
  }

  return(
    <Transition appear show={modalIsOpen()} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div>
                  <nav className="flex justify-between">
                    <div>{memo?.title}</div>
                    <button className=" p-2 group hover:bg-slate-200 rounded-full relative">
                      <BsPin size='1.2rem'/>
                      <span className="opacity-0 py-1 w-[70px] rounded text-[12px] font-bold text-white  bg-slate-600
                      group-hover:opacity-100 absolute top-9 -right-4">メモを固定</span>
                    </button>
                  </nav>
                  <div>{memo?.body}</div>
                  <div className="flex justify-between">
                    <button className=" p-2 group hover:bg-gray-200 rounded-full relative">
                      <RiInboxArchiveLine size='1.1rem'/>
                      <span className="opacity-0 py-1 w-[70px] rounded text-[12px] font-bold text-white  bg-slate-600
                      group-hover:opacity-100 absolute top-9 -right-4">アーカイブ</span>
                    </button>
                    <button className=" p-2 group hover:bg-gray-200 rounded-full relative">
                      <BsThreeDotsVertical size='1.1rem'/>
                      <span className="opacity-0 py-1 w-[120px] rounded text-[12px] font-bold text-white  bg-slate-600
                      group-hover:opacity-100 absolute top-9 -right-4">その他のアクション</span>
                    </button>
                    <button onClick={() => {onClickForm();}} className="px-4 hover:bg-gray-100">閉じる</button>
                  </div>
                  <button type="button" onClick={closeModal}>閉じる</button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}