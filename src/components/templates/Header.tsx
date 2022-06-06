import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { GrClose, GrUpdate } from 'react-icons/gr';
import { VscAccount, VscSettingsGear } from 'react-icons/vsc';
import { TbLayoutGrid, TbLayoutList } from 'react-icons/tb';

export const Header = (props: {toggleMenuIsOpen: any, toggleDisplayIsList: any, displayIsList: boolean}) => {
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
        <button className=" p-3 hover:bg-slate-200 rounded-full"> <GrUpdate size='1.2rem'/></button>
        <button onClick={props.toggleDisplayIsList} className=" p-3 hover:bg-slate-200 rounded-full">
          {DisplayTypeIcon(props.displayIsList)}
        </button>
        <button className=" p-3  group hover:bg-slate-200 rounded-full relative">
          <VscSettingsGear size='1.2rem'/>
          <span className="opacity-0 px-2 rounded text-[12px] font-bold text-white p-1 bg-slate-600
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

const SearchBar = () => {
  return(
    <div className="flex box px-2 w-1/2 rounded-md mx-auto bg-slate-100">
      <button className="m-1 p-2 hover:bg-slate-200 rounded-full" ><AiOutlineSearch  size='1.3rem'/></button>
      <input type="text" placeholder="検索" className=" w-full mx-1 "/>
      <button className="m-1 p-2 hover:bg-slate-200 rounded-full "><GrClose size='1rem'/></button>
    </div>
  );

}
