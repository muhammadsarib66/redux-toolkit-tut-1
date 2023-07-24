import React from 'react'
import Child1 from './components/Child1';
import { useSelector } from 'react-redux';

function App() {
  const data =  useSelector((c)=> { return c.show.value})
  return (
   

    <div className="App">
   <h1>
    heeloo Redux tollkit = {data} 
    <Child1/>
    </h1>
    </div>
   
  );
}

export default App;
