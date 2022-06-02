import React from 'react';

export const Card = (props:any) => {
  return(
    <>
        <p className="bg-teal-100 w-96 justify-between  rounded-md mx-auto my-8 text-center">未完了のTODO</p>
        {props.tasks.map((tasks:string) => {
          return(
            <div key={tasks}>
              <div className="flex box bg-teal-100 w-96 justify-between p-9 rounded-md mx-auto my-8">
              <div>{tasks}</div>
              <button >完了</button>
              </div>
            </div>
          );
        })}

    </>

  );
}
