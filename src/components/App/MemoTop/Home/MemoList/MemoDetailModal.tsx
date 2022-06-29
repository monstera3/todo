import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Memo } from '../../../App';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Pin } from './Pin';
import { ArchiveButton } from './ArchiveButton';
import { OtherActionsDropdown } from './OtherActionsDropdown';

export const MemoDetailModal = (props:{memo: Memo|null, closeModal: () => void, toggleMemoIsFixed: any,
  toggleMemoIsArchived:any, toggleMemoIsTrash:any,}) => {
  const { memo, closeModal } = props;

  const modalIsOpen = (): boolean => {
    return !!memo;
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
                      { !!memo ? <Pin toggleMemoIsFixed={props.toggleMemoIsFixed} memo={memo} /> : <></> }
                    </button>
                  </nav>
                  <div>
                    {memo?.body}</div>
                  <div className="flex justify-between">
                    { !!memo ? <ArchiveButton toggleMemoIsArchived={props.toggleMemoIsArchived} memo={memo}/> : <></> }
                    { !!memo ? <OtherActionsDropdown toggleMemoIsTrash={props.toggleMemoIsTrash} memo={memo} /> : <></> }
                    <button onClick={() => {closeModal();}} type="button" className="px-4 hover:bg-gray-100">閉じる</button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
