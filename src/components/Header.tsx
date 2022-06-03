import React from 'react';

export const Header = (props: {toggleMenuIsOpen:any}) => {
  return(
    <div>
      <header className="flex border-b border-gray-300 p-2">
        <button onClick={props.toggleMenuIsOpen}>menu</button>
        <h1 className="text-3xl font-bold">
          TODO
        </h1>
        <div className="flex box  w-96 justify-between px-5 py-2 rounded-md mx-auto	border border-gray-300  shadow-md shadow-gray-300/50 ">
          <input type="text" placeholder="検索" className=" px-8 rounded-full"/>
        </div>
        

      </header>
    </div>
  );
}
