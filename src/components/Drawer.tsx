import React, { ReactElement } from 'react';
import { MdOutlineLightbulb } from 'react-icons/md';
import { BiBell, BiTag, BiTrash } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';
import { RiInboxArchiveLine } from 'react-icons/ri';

type Menu = {
  key: string,
  label: string,
  icon: ReactElement,
}

const menuList: Menu[] = [
  {
    key: 'menu',
    label: 'メニュー',
    icon: (<MdOutlineLightbulb className='mr-4' size='1.5rem'/>),
  },
  {
    key: 'reminder',
    label: 'リマインダー',
    icon: (<BiBell className='mr-4' size='1.5rem'/>),
  },
  {
    key: 'cooking',
    label: '料理',
    icon: (<BiTag className='mr-4' size='1.5rem'/>),
  },
  {
    key: 'editLabel',
    label: 'ラベルの編集',
    icon: (<BsPencil className='mr-4' size='1.5rem'/>),
  },
  {
    key: 'archive',
    label: 'アーカイブ',
    icon: (<RiInboxArchiveLine className='mr-4' size='1.5rem'/>),
  },
  {
    key: 'trashBox',
    label: 'ゴミ箱',
    icon: (<BiTrash className='mr-4' size='1.5rem'/>),
  },
];


export const Drawer = (props:{menuIsOpen:boolean}) => {

  return(

    <div className="mr-4 my-4">
      {
        menuList.map((menu:Menu)=>{
          if(props.menuIsOpen){
            return(
              <div key={menu.key} role='button' className='flex  px-4 py-2 hover:bg-slate-200 rounded-r-full'>
                {menu.icon}
                <p className="w-40">{menu.label}</p>
              </div>
            )
          }else {
            return(
              <div key={menu.key} role='button' className='flex px-4 py-2 hover:bg-slate-200 rounded-r-lg'>
                {menu.icon}
              </div>
            )
          }

        })
      }
    </div>
  );
}
