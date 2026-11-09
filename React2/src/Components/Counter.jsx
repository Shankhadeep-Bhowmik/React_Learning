import {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  function increaseCount(){
    setCount(count=>count+1);
  }
  function decreaseCount(){
    setCount(count=>count-1);
  }
  function resetCount(){
    setCount(0);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  )
}

export default Counter
