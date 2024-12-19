import React from 'react';
import ReactDOM from 'react-dom/client';



const tick = ()=>{
  const elem= ( 
  <div>
    <h1>hello world</h1>
    <h2>
      it is {new Date().toLocaleTimeString()}
    </h2>
  </div>);
  root.render(elem)
}

setInterval(()=>{
  tick();
}, 1000)


const root = ReactDOM.createRoot(document.getElementById('root'));

