import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { PaletteIcons } from '../../../shared/atoms/PaletteIcons';
import { Memo } from '../../App';

type Color = {
  name: 'white' | 'red' | 'orange' | 'yellow',
  tailName: 'bg-white-300' | 'bg-red-300' | 'bg-orange-300' | 'bg-yellow-300',
  fill: '#fff' | '#fca5a5' | '#fdba74' | '#fde047',
  stroke: '#e0e0e0' | '#fca5a5' | '#fdba74' | '#fde047',
}


export const colorList: Color[] = [
  {
    name: 'white',
    tailName: 'bg-white-300',
    fill: '#fff',
    stroke: '#e0e0e0',
  },
  {
    name: 'red',
    tailName: 'bg-red-300',
    fill: '#fca5a5',
    stroke: '#fca5a5',
  },
  {
    name: 'orange',
    tailName: 'bg-orange-300',
    fill: '#fdba74',
    stroke: '#fdba74',
  },
  {
    name: 'yellow',
    tailName: 'bg-yellow-300',
    fill: '#fde047',
    stroke: '#fde047',
  }
]


export const ColorOptionDropdown = (props: { toggleMemoIsColor: (index: number, color: string, event: React.MouseEvent<HTMLButtonElement>) => void, memo: Memo }) => {
  return (
    <div className=" text-right">
      <Menu as="div" className="relative inline-block ">
        <div>
          <Menu.Button>
            <div className="p-2 group hover:bg-gray-500/[0.2] rounded-full relative">
              <PaletteIcons/>
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
                  {
                    colorList.map((color) => {
                      return (
                        <button
                          onClick={(event: React.MouseEvent<HTMLButtonElement>) => props.toggleMemoIsColor(props.memo.id, color.name, event)}
                          className=" hover:stroke-2 stroke-blue-300 group relative"
                          data-tooltip-text="赤">
                          <svg width="50" height="50">
                            <circle cx="25" cy="25" r="15" stroke={color.stroke} strokeWidth="2"
                                    fill={color.fill} className=" hover:stroke-gray-600"/>
                          </svg>
                          <span
                            className="invisible opacity-0 p-1 w-max rounded text-[12px] font-bold text-white  bg-gray-500 group-hover:visible opacity-100 absolute top-[85%] -translate-x-1/2 z-20 ">
                          {color.name}</span>
                        </button>
                      )
                    })
                  }
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




