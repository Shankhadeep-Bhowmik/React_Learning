import {useState, useRef} from 'react'

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);
  function startTimer(){
    if(timerRef.current !== null){
      return;
    }
    timerRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  }
  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function reset(){
    stopTimer();
    setSeconds(0);
  }
  return (
    <div>
      <h1>{seconds}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Timer
