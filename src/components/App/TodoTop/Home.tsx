import { FixedMemoList } from './Home/FixedMemoList';
import React from 'react';
import { InputForm } from './Home/InputForm';
import { MemoList } from './Home/MemoList';
import { Memo } from '../App';

export type HomeType = {
  inputText:string,
  onChangeInputText:(e: React.ChangeEvent<HTMLInputElement>) => void,
  onClickAdd: () => void,
  onChangeInputTitle: (e: React.ChangeEvent<HTMLInputElement>) => void,
  inputTitle:string,
  memoList: Memo[],
  displayIsList: boolean,
  onClickDelete: (index: number) => void,
}

export const Home = (props:HomeType) => {
  const {inputText,onChangeInputText,onClickAdd,onChangeInputTitle,inputTitle,
    memoList,displayIsList,onClickDelete} = props;
  return(
    <div>
      Home
      <InputForm
        inputText={inputText} onChangeInputText={onChangeInputText} onClick={onClickAdd}
        inputTitle={inputTitle} onChangeInputTitle={onChangeInputTitle}
      />
      <FixedMemoList />
      <MemoList
        memoList={memoList}
        displayIsList={displayIsList}
        onClickDelete={onClickDelete}
      />
    </div>
  );
}
