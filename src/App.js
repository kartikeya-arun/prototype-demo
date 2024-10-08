import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  useEffect(()=>{
    console.log(window?.env?.appEnv)
    window.ReactNativeWebView.postMessage(JSON.stringify({appEnv:'react web environment'})) 
  },[])

  return (
    <div className="App">
      <Routes>
        <Route
          exact path='/' element={<Card />} 
        />
        <Route
          exact path='/page2' element={<Page2 />} 
        />
        <Route
          exact path='/page3' element={<Page3 />} 
        />
      </Routes>
    </div>
  );
}

export default App;
