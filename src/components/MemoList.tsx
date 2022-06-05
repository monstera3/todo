import React from 'react';


export const MemoList = (props: {memoList: string[], displayIsList: boolean}) => {
  const gridCols = () => {
    return props.displayIsList ? 'grid-cols-1' : 'grid-cols-3';
  }

  const listWidth = () => {
    return props.displayIsList ? 'w-2/3 ' : 'w-full';

  }

  return(
    <div>
      <p>固定済み</p>
      <div className={ listWidth() +' grid gap-4 mr-4 ' + gridCols()  }>
        {props.memoList.map((memo:string) => {
          return(
            <div key={memo}>
              <div className="flex justify-between p-9 rounded-md mx-auto my-8 border border-gray-40 ">
                <div>{memo}</div>
                <button >完了</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
