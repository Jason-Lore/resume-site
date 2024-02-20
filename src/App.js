import React from 'react';

import Header from './components/Header';
import Certifications from './components/Certifications';
import Experience from './components/Experience';

function App() {
  return(
    <div className='root-app'>
      <Header/>
      <Experience/>
      <Certifications/>
    </div>
  );
}

export default App;
