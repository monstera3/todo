import React from 'react';

export const Card = (props:any) => {
  return(
    <>
        <p className=" w-96 justify-between  mx-auto my-8 text-center">未完了のTODO</p>
        {props.tasks.map((tasks:string) => {
          return(
            <div key={tasks}>
              <div className="flex box w-96 justify-between p-9 rounded-md mx-auto my-8 border border-gray-40 ">
              <div>{tasks}</div>
              <button >完了</button>
              </div>
            </div>
          );
        })}

    </>

  );
}
