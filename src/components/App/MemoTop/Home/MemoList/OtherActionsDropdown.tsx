import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Memo } from '../../../App';

export const OtherActionsDropdown = (props:{toggleMemoIsTrash:any, memo:Memo}) => {
  return (
    <div className=" text-right">
      <Menu as="div" className="relative inline-block ">
        <div>
          <Menu.Button >
            <div className=" p-2 group hover:bg-gray-200 rounded-full relative">
              <BsThreeDotsVertical size='1.1rem'/>
              <span className="invisible opacity-0 p-1 w-[120px] rounded text-[12px] font-bold text-white  bg-slate-600
                      group-hover:visible opacity-100 absolute top-9 -right-10">その他のアクション</span>
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-10 absolute right-0 top-[90%] w-48 origin-top-right divide-y divide-gray-100 rounded-md
          bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-2 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => props.toggleMemoIsTrash(props.memo.id)}
                    className={`${
                      active ? 'bg-slate-200 ' : 'text-gray-900'
                    } group flex w-full items-center  px-2 py-2 text-sm`}
                  >
                    メモを削除
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-slate-200' : 'text-gray-900'
                    } group flex w-full items-center px-2 py-2 text-sm`}
                  >
                    ラベルを追加
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}




