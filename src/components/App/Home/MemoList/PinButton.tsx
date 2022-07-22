import React from 'react';
import { Memo } from '../../App';
import { PinIcon } from '../../../shared/atoms/PinIcon';

export const PinButton = (props:{  toggleMemoIsFixed:(index:number, event: React.MouseEvent<HTMLButtonElement>) => void, memo: Memo }) => {
  return(
    //NOTE eventを削除するとモーダル時に反応しなくなる
    //TODO モーダルを閉じたい
    <button onClick={(event: React.MouseEvent<HTMLButtonElement>)=> props.toggleMemoIsFixed(props.memo.id, event)}
            className=" p-2 group hover:bg-slate-200 rounded-full relative">
      <PinIcon isFixed={props.memo.isFixed} />
    </button>
  );
}
