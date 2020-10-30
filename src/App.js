import React , {useState} from 'react';
import './App.css';
import Message from './Message';

function App() {

  let [count,setCount] = useState(0)
  return (
    <div >
      <Message counter={count}/>
     <br />
     <div className='buttondiv'>
      
     <button onClick={
       ()=> setCount(count +1)
     }>
       Update Counter
     </button>
     <button onClick={
       ()=> setCount(0) 
     }
     >
       Reset
     </button>

     </div>
     
    </div>
  );
}

export default App;
