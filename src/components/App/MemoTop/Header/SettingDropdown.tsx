import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { VscSettingsGear } from 'react-icons/vsc';

export const SettingDropdown = () => {
  return (
    <div className=" text-right">
      <Menu as="div" className="relative inline-block ">
        <div>
          <Menu.Button >
            <div className=" p-3  group hover:bg-slate-200 rounded-full relative" aria-label="aa">
              <VscSettingsGear size='1.2rem'/>
              <span className="invisible opacity-0 px-2 rounded text-[12px] font-bold text-white p-1 bg-slate-600
          group-hover:visible opacity-100 absolute top-11 right-0.5">設定</span>
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
          <Menu.Items className="absolute right-0 top-[90%] w-48 origin-top-right divide-y divide-gray-100 rounded-md
          bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-2 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-slate-200 ' : 'text-gray-900'
                    } group flex w-full items-center  px-2 py-2 text-sm`}
                  >
                    設定
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
                    ダークモードを有効にする
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




