import React from 'react';


export const MemoList = (props: {memoList: string[]}) => {
  return(
    <div>
      <p>固定済み</p>
      {props.memoList.map((tasks:string) => {
        return(
          <div key={tasks}>
            <div className="flex box w-96 justify-between p-9 rounded-md mx-auto my-8 border border-gray-40 ">
              <div>{tasks}</div>
              <button >完了</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
