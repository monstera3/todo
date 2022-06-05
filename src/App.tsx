import React, { useState } from 'react';
import { Drawer } from './components/Drawer';
import './App.css';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { Fixed } from './components/Fixed';


function App() {
  const [inputText,setInputText] = useState('');
  const [taskList,setTaskList] = useState(['aa', 'bb']);
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const [displayIsList, setDisplayIsList] = useState<boolean>(true);

  const onChangeInputText = (e:any) =>{
    setInputText(e.target.value)
  }

  const onClickAdd = () => {
    if (inputText === '')return;
    const newTasks = [...taskList, inputText];
    setTaskList(newTasks);
    setInputText('');
  };

  const toggleDisplayIsList = () => {
    setDisplayIsList(!displayIsList);
  }


  const toggleMenuIsOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <div className="App">
      <Header toggleMenuIsOpen={toggleMenuIsOpen} toggleDisplayIsList={toggleDisplayIsList} displayIsList={displayIsList}/>
      <div className="flex flex-row w-screen">
        <Drawer menuIsOpen={menuIsOpen}/>
        <div className="flex flex-col w-full justify-items-center">
          <InputForm
            inputText={inputText} onChange={onChangeInputText} onClick={onClickAdd}/>
          <Fixed tasks={taskList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
