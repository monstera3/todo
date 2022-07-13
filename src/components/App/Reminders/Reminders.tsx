import React from 'react';
import { BiBell } from 'react-icons/bi';


export const Reminders = () => {
  return(
    <div className="m-auto flex flex-col items-center">
      <BiBell className='m-8 opacity-20 content-center' size='5rem'/>
      <p className="text-[1.4rem] text-gray-500 font-medium">今後のリマインダーが設定されているメモはここに表示されます</p>
    </div>
  );
}
