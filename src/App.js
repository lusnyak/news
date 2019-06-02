import React from 'react';
import Header from './Header/Header';
import GridNews from './News/GridNews';
import AddNews from './AddNews/AddNews';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <GridNews/>
      <AddNews/>
    </div>
  );
}

export default App;
