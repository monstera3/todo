import React from 'react';

export const Card = (props:any) => {
  const {Todos} = props;
  return(
    <div className="flex box bg-teal-100 w-96 justify-between p-9 rounded-md mx-auto my-8">
    Card
      <p>未完了のTODO</p>
      {Todos.map((props:any) => {
        return(
          <div key={props}>
            <div>{props}</div>
            <button >完了</button>

          </div>
        );
      })}
    </div>
  );
}
