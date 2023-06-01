import logo from './logo.svg';
import './App.css';
import {useRef, useState} from "react";

function App() {
  const [value, setValue] =  useState('');

  const isValid = (value) => value.length <10 ;

  const onClick = () => {
    console.log(value);
  };

  const onChange = (e) => {
    const { value } = e.target;

    let willUpdate = true;
    willUpdate = isValid(value);

    if(willUpdate) {
      setValue(value);
    }
  }

  return (
    <div className="App">
      <input placeholder='name' onChange={onChange} value={value}/>
      <button onClick={onClick} />
    </div>
  );
}

export default App;
