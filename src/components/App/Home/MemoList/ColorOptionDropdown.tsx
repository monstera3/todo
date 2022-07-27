import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { PaletteIcons } from '../../../shared/atoms/PaletteIcons';
import { Memo } from '../../App';

export const ColorOptionDropdown = (props:{toggleMemoIsColor:(index:number,event: React.MouseEvent<HTMLButtonElement>)=>void,memo:Memo}) => {
  return (
    <div className=" text-right">
      <Menu as="div" className="relative inline-block ">
        <div>
          <Menu.Button >
            <div className=" p-2 group hover:bg-gray-200 rounded-full relative">
              <PaletteIcons />
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
                    <div className="flex">
                      <button
                        onClick={(event: React.MouseEvent<HTMLButtonElement>)=> props.toggleMemoIsColor(props.memo.id,event)}
                        className=" hover:stroke-2 stroke-blue-300 group relative" data-tooltip-text="赤">
                        <svg width="50" height="50" >
                          <circle cx="25" cy="25" r="15" stroke="#e0e0e0" strokeWidth="2" fill="#fff" className=" hover:stroke-gray-600"/>
                        </svg>
                        <span className="invisible opacity-0 p-1 w-max rounded text-[12px] font-bold text-white  bg-gray-500 group-hover:visible opacity-100 absolute top-[85%] -translate-x-1/2 z-20 ">
                          デフォルト</span>
                      </button>
                      <button>
                        <svg width="50" height="50">
                          <circle cx="25" cy="25" r="15" stroke="#f28b82" strokeWidth="2" fill="#f28b82" className=" hover:stroke-gray-600"/>
                        </svg>
                      </button>
                      <button>
                        <svg width="50" height="50">
                          <circle cx="25" cy="25" r="15" stroke="#fbbc04" strokeWidth="2" fill="#fbbc04" className=" hover:stroke-gray-600"/>
                        </svg>
                      </button>
                      <button>
                        <svg width="50" height="50">
                          <circle cx="25" cy="25" r="15" stroke="#fff475" strokeWidth="2" fill="#fff475" className=" hover:stroke-gray-600"/>
                        </svg>
                      </button>
                    </div>

              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-slate-200' : 'text-gray-900'
                    } group flex w-full items-center px-2 py-2 text-sm`}
                  >
                    柄
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




