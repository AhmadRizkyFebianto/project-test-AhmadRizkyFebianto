// App.js

import React from 'react';
import Navbar from './component/Navbar';
import Ideas from './component/Ideas';
import IdeasList from './component/IdeasList';

function App() {
  return (
    <>
      <div>
        <Navbar/>
      </div>

      <div>
        <Ideas/>
      </div>

      <div>
        <IdeasList/>
      </div>
    </>
  );
}

export default App;
