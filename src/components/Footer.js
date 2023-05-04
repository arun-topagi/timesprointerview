import { useState, useEffect } from 'react';
import VideoRecorder from "react-video-recorder";

function Countdown() {
  const [count, setCount] = useState(3);
  const [isFirstCountdown, setIsFirstCountdown] = useState(true);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    let timerId;
    if(isRecording)
    {
      if (count > 0) {
        timerId = setTimeout(() => {
          setCount(count - 1);
        }, 1000);
      } else if (isFirstCountdown) {
        setIsFirstCountdown(false);
        setCount(30);
      } else {
        // Second countdown has ended
        // Do something else here
      }
    }
    return () => clearTimeout(timerId);
  }, [count, isFirstCountdown, isRecording]);

  return (
    <div>
      {isFirstCountdown?<p>ThinkTime:{count} seconds</p>:<p>ThinkTime:{0} seconds</p>}
   {isFirstCountdown ? <p> Doration: {30} seconds</p> : <p>Duration: {count} seconds</p>}
   <div style={{ height: "50vh", width: "60vw" }}>
          <VideoRecorder
            isOnInitially={true}
            isRecording={true}
            isFlipped = {true}
            // countdownTime={userCountDown}
            // timeLimit={userTimeLimit}
            showReplayControls={true}
            disablePictureInPicture={true}
            renderDisconnectedView={() => <div>
            </div>}
            replayVideoAutoplayAndLoopOff={true}
            onStartRecording={() =>(setIsRecording(true)) }
            onRecordingComplete={() => setIsRecording(false)}
            // ref={videoRef}

            />
          {/* <button {...getTriggerProps()}></button> */}
        </div>
      
    </div>
  );
}

export default Countdown;
