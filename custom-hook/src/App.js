import logo from './logo.svg';
import './App.css';
import {useRef, useState} from "react";

const useInput = () => {
  const [value, setValue] =  useState('');

  const isValid = (value) => value.length <10 ;

  const onChange = (e) => {
    const { value } = e.target;

    let willUpdate = true;
    willUpdate = isValid(value);

    if(willUpdate) {
      setValue(value);
    }
  }

  return {value, onChange};
}

function App() {

  const { value, onChange } = useInput();

  const onClick = () => {
    console.log(value);
  };


  return (
    <div className="App">
      <input placeholder='name' onChange={onChange} value={value}/>
      <button onClick={onClick} >button </button>
    </div>
  );
}

export default App;
