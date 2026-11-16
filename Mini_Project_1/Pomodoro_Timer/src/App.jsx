import {useState, useRef} from 'react'
import "./App.css";
const App = () => {
  const [timeLeft, setTimeLeft] = useState(1500);
  const timeRef = useRef(null);
  function startTimer(){
    if(timeRef.current !== null){
      return;
    }
    timeRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if(timeLeft <= 0){
          stopTimer();
          return 0;
        }
        return timeLeft-1;
      })
    }, 1000);
  }
  function stopTimer(){
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

function reset(){
  stopTimer();
  setTimeLeft(1500);
}

  return (
    <div className='container'>
      <h1>Pomo-doro Timer</h1>
      <div className="timer">
        <p>{parseInt(timeLeft/60) < 10 ? `0${parseInt(timeLeft/60)}` : `${parseInt(timeLeft/60)}`}:{parseInt(timeLeft%60) < 10 ? `0${parseInt(timeLeft%60)}` : `${parseInt(timeLeft%60)}`}</p>
      </div>
      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default App
