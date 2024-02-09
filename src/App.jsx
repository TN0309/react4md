
import React, { useRef, useState } from 'react';
import './App.css';

function App(){
  const btnRef = useRef()
  function open(){
    btnRef.current.style.display = 'block'
  }
  function close(){
    btnRef.current.style.display = 'none'
  }
  return(
    <div className="App">
      <button className='Kere' onClick={open}>Click</button>
      <div className="modal__header" ref={btnRef}>
      <div className="modal__app">
        <div className="modal">
        <h2 className='title'>Welcome</h2>
        <i onClick={close} class="bi bi-x-lg x"></i>
        </div>
        <hr />
        <p className='text '>Sizga dasturimiz yoqtimi?</p> 
        <hr />
        <div className="btn">
          <button onClick={close}>Close</button>
          <button>Save</button>
        </div>
      </div>
      </div>
    </div>
  )
}
export default App;
