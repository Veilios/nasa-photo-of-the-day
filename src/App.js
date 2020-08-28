import React from "react";
import PhotoCard from './components/PhotoCard';
import Vote from './components/Vote';
import DatePicker from './components/DatePicker'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="https://www.nasa.gov/">Nasa</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="https://api.nasa.gov/">Data</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="https://lambdaschool.com/">Lambda</BreadcrumbItem>
      </Breadcrumb>
      <PhotoCard />
      <div className="com">
        <DatePicker />
        <Vote />
      </div> 
    </div>
  );
}

export default App;
