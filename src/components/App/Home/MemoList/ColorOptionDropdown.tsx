import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { PaletteIcons } from '../../../shared/atoms/PaletteIcons';

export const ColorOptionDropdown = () => {
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
                {({ active }) => (
                  <>
                    <button
                      className={`${
                        active ? 'bg-slate-200' : 'text-gray-900'
                      } group flex w-full items-center px-2 py-2 text-sm`}
                    >
                      柄
                    </button>
                    <div className="flex">
                      <button>
                        <svg width="50" height="50">
                          <circle cx="25" cy="25" r="10" stroke="gray" strokeWidth="4" fill="#fff" />
                        </svg>
                      </button>
                      <button>
                        <svg width="50" height="50">
                          <circle cx="25" cy="25" r="10" stroke="#f28b82" strokeWidth="4" fill="#f28b82" />
                        </svg>
                      </button>
                      <button>
                        <svg width="50" height="50">
                          <circle cx="25" cy="25" r="10" stroke="#fbbc04" strokeWidth="4" fill="#fbbc04" />
                        </svg>
                      </button>
                      <button>
                        <svg width="50" height="50">
                          <circle cx="25" cy="25" r="10" stroke="#fff475" strokeWidth="4" fill="#fff475" />
                        </svg>
                      </button>
                    </div>

                  </>
                )}
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




