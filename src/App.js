import React from 'react';
import Header from './components/header';
import Headline from './components/headline';

function App() {
 
  return (
    <div className="App">
      <Header />
      <Headline header="Posts" desc="Click the button to render posts."/>
    </div>
  );
}

export default App;
