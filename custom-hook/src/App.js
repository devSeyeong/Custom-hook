import './App.css';
import {useState} from "react";

const useInput = (validator) => {
  const [value, setValue] =  useState('');

  const onChange = (e) => {
    const { value } = e.target;

    let willUpdate = true;
    if(typeof validator === 'function'){
      willUpdate = isValid(value);
    }
    if(willUpdate) {
      setValue(value);
    }
  }

  return {value, onChange};
}

function App() {

  const maxLen = (value) => value.length <10;
  const { value, onChange } = useInput(maxLen);


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
