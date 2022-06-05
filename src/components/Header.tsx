import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

export const Header = (props: {toggleMenuIsOpen:any}) => {
  return(
    <div>
      <header className="flex border-b border-gray-300 p-2 items-center	">
        <button onClick={props.toggleMenuIsOpen} className="m-1 p-2 hover:bg-slate-200 rounded-full">
          <GiHamburgerMenu size='1.5rem'/>
        </button>
        <h1 className="text-3xl font-bold">
          TODO
        </h1>

        <SearchBar/>
        

      </header>
    </div>
  );
}

const SearchBar = () => {
  return(
    <div className="flex box px-2 w-1/2 rounded-md mx-auto bg-slate-100	">
      <button className="m-1 p-2 hover:bg-slate-200 rounded-full" ><AiOutlineSearch  size='1.3rem'/></button>
      <input type="text" placeholder="検索" className=" w-full mx-1"/>
      <button className="m-1 p-2 hover:bg-slate-200 rounded-full"><GrClose size='1rem'/></button>
    </div>
  );

}
