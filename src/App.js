import React from 'react';
import Header from './components/header';
import Headline from './components/headline';

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}]

function App() {
 
  return (
    <div className="App">
      <Header />
      <Headline header="Posts" desc="Click the button to render posts." tempArr={tempArr}/>
    </div>
  );
}

export default App;
