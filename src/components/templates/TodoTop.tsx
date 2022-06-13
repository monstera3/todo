import { Header } from './Header';
import { Drawer } from './Drawer';
import { InputForm } from '../organisms/InputForm';
import { MemoList } from './MemoList';
import React, { Fragment, useState } from 'react';
import { Memo } from '../../App';
import { Dialog, Transition } from '@headlessui/react';
import { MemoDetail } from '../pages/MemoDetail';
import { Home } from './Home';

  export const TodoTop = (props: { memoList: Memo[], setMemoList:any, }) => {
    const { memoList, setMemoList } = props;
    const [inputText,setInputText] = useState('');
    const [inputTitle,setInputTitle] = useState('');
    const [menuIsOpen, setMenuIsOpen] = useState(true);
    const [displayIsList, setDisplayIsList] = useState<boolean>(false);
    const [modalIsOpen, setModalIsIsOpen] = useState(false);

    const closeModal = () => {
      setModalIsIsOpen(false);
    }

    const openModal = () => {
      setModalIsIsOpen(true);
    }

    const onChangeInputText = (e:React.ChangeEvent<HTMLInputElement>) =>{
      setInputText(e.target.value)
    }

    const onChangeInputTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value)
    }
    const onClickAdd = () => {
      if (inputText === '' && inputTitle === '') return;
      const newMemos = [...memoList, { title: inputTitle, body: inputText }];
      setMemoList(newMemos);
      updateStoredMemos(newMemos);
      setInputText('');
      setInputTitle('');
    };

    const onClickDelete = (index:number) => {
      const newMemos = [...memoList];
      newMemos.splice(index,1);
      setMemoList(newMemos);
      updateStoredMemos(newMemos);
    }

    const toggleDisplayIsList = () => {
      setDisplayIsList(!displayIsList);
    }


    const toggleMenuIsOpen = () => {
      setMenuIsOpen(!menuIsOpen);
    }

    //ローカルストレージのキーのstoredMemosに追加される
    const updateStoredMemos = (updatedMemos: Memo[]) => {
      localStorage.setItem('storedMemos', JSON.stringify(updatedMemos));
    }


    return(
      <>
        <Header toggleMenuIsOpen={toggleMenuIsOpen} toggleDisplayIsList={toggleDisplayIsList} displayIsList={displayIsList}/>
        <div className="flex flex-row w-screen">
          <Drawer menuIsOpen={menuIsOpen}/>
          <Home />
          <div className="flex flex-col w-full justify-items-center">
            <InputForm
              inputText={inputText} onChangeInputText={onChangeInputText} onClick={onClickAdd}
              inputTitle={inputTitle} onChangeInputTitle={onChangeInputTitle}
            />
            <MemoList
              memoList={memoList}
              displayIsList={displayIsList}
              onClickDelete={onClickDelete}
              openModal={openModal}/>
            <button onClick={openModal}>Open dialog</button>
            <Transition appear show={modalIsOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <MemoDetail />
                        <div>
                          <button type="button" onClick={closeModal}>close</button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
      </>
  );
}
