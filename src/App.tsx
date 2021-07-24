import React from 'react';
import './App.css';
import { BannerData,BannerData2 } from './BannerData';
import { Slider } from './components/Slider';

function App() {
  return (
    <div className="App">
      <Slider height={"300px"} width={"50%"} slides={BannerData} infiniteLoop={true} />
    </div>
  );
}

export default App;
