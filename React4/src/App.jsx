import {useRef} from 'react'
import Timer from './Components/Timer';
import VideoPlayer from './Components/VideoPlayer';

const App = () => {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  function focusEmail(){
    emailRef.current.focus();
  }
  function focusName(){
    nameRef.current.focus();
  }
  return (
    <div>
      <input type="email" ref={emailRef} placeholder='Enter email'/>
      <button onClick={focusEmail}>
        Focus email
      </button>
      <input type="text" ref={nameRef} placeholder='Enter name'/>
      <button onClick={focusName}>Focus name</button>
      <hr />
      <Timer/>
      <hr />
      <VideoPlayer/>
    </div>
  )
}

export default App
