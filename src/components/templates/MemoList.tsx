import React from 'react';
import { Memo } from '../../App';


export const MemoList = (props: {memoList: Memo[], displayIsList: boolean}) => {
  const gridCols = () => {
    return props.displayIsList ? 'grid-cols-1' : 'sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6';
  }

  const listWidth = () => {
    return props.displayIsList ? 'w-2/3 ' : 'w-11/12 ';

  }

  return(
    <div>
      <p>固定済み</p>
      <div className={ listWidth() +' grid gap-4 ' + gridCols()  }>
        {props.memoList.map((memo: Memo) => {
          return(
            <div key={memo.title}>
              <div className="flex justify-between p-9 rounded-md mx-auto my-8 border border-gray-40 ">
                <div>{memo.title}</div>
                <button >完了</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
