import React from 'react';
import './App.css';
import { BannerData } from './BannerData';
import { Slider } from './components/Slider';

function App() {
  return (
    <div className="App">
      <Slider height={"300px"} width={"50%"}/>
    </div>
  );
}

export default App;
