import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Category from './Components/Category';
import Sidemenu from './Components/Sidemenu';
import { useState } from 'react';
function App() {
  const [toggle, setToggle] = useState(false);

  const showSidemenu = () => {
    setToggle(true);
  };

  const hideSidemenu = () => {
    setToggle(false);
  };
  return (
    <div className="App">
            <Sidemenu toggle={toggle} hideSidemenu={hideSidemenu} />

      <Header showSidemenu={showSidemenu} />

      <Category/>
    </div>
  );
}

export default App;
