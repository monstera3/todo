import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { GrClose, GrUpdate } from 'react-icons/gr';
import { VscAccount, VscSettingsGear } from 'react-icons/vsc';
import { TbLayoutGrid, TbLayoutList } from 'react-icons/tb';


type HeaderProps = {
  toggleMenuIsOpen: () => void,
  toggleDisplayIsList: () => void,
  displayIsList: boolean,
}

export const Header = (props:HeaderProps) => {
  return(
    <div>
      <header className="flex border-b border-gray-300 p-2 items-center	">
        <button onClick={props.toggleMenuIsOpen} className="p-3 hover:bg-slate-200 rounded-full">
          <GiHamburgerMenu size='1.5rem'/>
        </button>
        <h1 className="text-3xl font-bold">
          TODO
        </h1>
        <SearchBar/>
        <button className=" p-3 group hover:bg-slate-200 rounded-full relative">
          <GrUpdate size='1.2rem'/>
          <span className="opacity-0  w-[74px] rounded text-[12px] font-bold text-white py-1 bg-slate-600
          group-hover:opacity-100 absolute top-11 -left-3">更新します</span>
        </button>
        <button onClick={props.toggleDisplayIsList} className=" p-3 group hover:bg-slate-200 rounded-full relative">
          {DisplayTypeIcon(props.displayIsList)}
          <span className="opacity-0 py-1 w-24 rounded text-[12px] font-bold text-white bg-slate-600
          group-hover:opacity-100 absolute top-11 -left-6">{DisplayTypeMessage(props.displayIsList)}</span>
        </button>
        <button className=" p-3  group hover:bg-slate-200 rounded-full relative" aria-label="aa">
          <VscSettingsGear size='1.2rem'/>
          <span className="opacity-1 px-2 rounded text-[12px] font-bold text-white p-1 bg-slate-600
          group-hover:opacity-100 absolute top-11 right-0.5">設定</span>
        </button>
        <button className="p-3 hover:bg-slate-200 rounded-full"> <VscAccount size='1.5rem'/></button>

      </header>
    </div>
  );
}

const DisplayTypeIcon = (isList: boolean) => {
  return isList ? (<TbLayoutGrid size='1.2rem'/>) : (<TbLayoutList size='1.2rem'/>)
}

const DisplayTypeMessage = (isList: boolean) => {
  return isList ? "ギャラリー表示" : "リスト表示"
}

const SearchBar = () => {
  return(
    <div className="flex box px-2 w-1/2 rounded-md mx-auto bg-slate-100">
      <button className="m-1 p-2 hover:bg-slate-200 rounded-full" ><AiOutlineSearch  size='1.3rem'/></button>
      <input type="text" placeholder="検索" className=" w-full mx-1 "/>
      <button className="m-1 p-2 hover:bg-slate-200 rounded-full "><GrClose size='1rem'/></button>
    </div>
  );

}
