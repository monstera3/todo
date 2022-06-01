import React from 'react';

export const InputForm = () => {
  return(
    <div className="flex box bg-teal-300 w-96 justify-between p-5 rounded-md ">
      <input type="text"/>
      <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-100">閉じる</button>
    </div>
  );
}
