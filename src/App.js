import React from "react";
import PhotoCard from './components/PhotoCard';
import Vote from './components/Vote';
import DatePicker from './components/DatePicker'

import "./App.css";

function App() {
  return (
    <div className="App">
      <PhotoCard />
      <div className="com">
        <DatePicker />
        <Vote />
      </div> 
    </div>
  );
}

export default App;
