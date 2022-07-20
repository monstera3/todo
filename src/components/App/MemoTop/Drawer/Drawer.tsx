import React, { ReactElement } from 'react';
import { MdOutlineLightbulb } from 'react-icons/md';
import { BiBell, BiTag, BiTrash } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

type Menu = {
  key: string,
  label: string,
  icon: ReactElement,
  path: string,
}

export const menuList: Menu[] = [
  {
    key: 'memo',
    label: 'メモ',
    icon: (<MdOutlineLightbulb className='mr-4' size='1.5rem'/>),
    path: '/home'
  },
  {
    key: 'reminder',
    label: 'リマインダー',
    icon: (<BiBell className='mr-4' size='1.5rem'/>),
    path: '/reminders'
  },
  {
    key: 'cooking',
    label: '料理',
    icon: (<BiTag className='mr-4' size='1.5rem'/>),
    path: '',
  },
  {
    key: 'editLabel',
    label: 'ラベルの編集',
    icon: (<BsPencil className='mr-4' size='1.5rem'/>),
    path: '',
  },
  {
    key: 'archive',
    label: 'アーカイブ',
    icon: (<RiInboxArchiveLine className='mr-4' size='1.5rem'/>),
    path: '/archive'
  },
  {
    key: 'trashBox',
    label: 'ゴミ箱',
    icon: (<BiTrash className='mr-4' size='1.5rem'/>),
    path: '/trash'
  },
];


export const Drawer = (props:{menuIsOpen:boolean}) => {

  return(

    <div className="mr-4 my-4">
      {
        menuList.map((menu:Menu)=>{
          if(props.menuIsOpen){
            return(
              <Link to={menu.path} key={menu.key}>
                <div  role='button' className='flex  px-6 py-2 hover:bg-slate-200 rounded-r-full w-60 '>
                {menu.icon}
                  <p className="pl-4">{menu.label}</p>
                </div>
              </Link>
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
