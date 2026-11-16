import {useRef} from 'react'

const VideoPlayer = () => {
  const videoRef = useRef(null);
  function start(){
    videoRef.current.play();
  }
  function stop(){
    videoRef.current.pause();
  }
  return (
    <div>
      <video src="/mySampleVideo.mp4" ref={videoRef} width="400"></video>
      <button onClick={start}>Play</button>
      <button onClick={stop}>Pause</button>
    </div>
  )
}

export default VideoPlayer
