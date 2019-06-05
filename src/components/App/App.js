import React from 'react';
import './App.css';

import Header from '../Header';
import GridNews from '../GridNews';
import AddNews from '../AddNews';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <GridNews/>
      <AddNews/>
    </div>
  );
}

export default App;
