import React from 'react';

import Header from './components/Header';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import WorkHistory from './components/WorkHistory'

function App() {
  return(
    <div className='root-app'>
      <Header/>
      <Experience/>
      <Certifications/>
      <WorkHistory/>
    </div>
  );
}

export default App;
