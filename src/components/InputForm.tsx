import React from 'react';

export const InputForm = () => {
  return(
    <div className="flex box bg-teal-300 w-96 justify-between px-5 rounded-md mx-auto	">
      <input type="text" placeholder="TODOを入力" className="bg-white px-8 rounded-full"/>
      <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-100">作成</button>
    </div>
  );
}
