import React from 'react'
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const interviewState = useSelector((state)=>state.interview);
  const navigate = useNavigate();
  
  const handleClearLocalStorage = () => {
    localStorage.clear();
    window.location.reload(true);
    alert('Local storage cleared successfully!');
  };
  
  
  return (
    <div>
    <div>
        <h1>
            Time's Pro Interview App    
        </h1>
    </div>
    <div style={{display:'flex', justifyContent:'space-evenly'}}>
    {
      interviewState.isStart === false
      ?
      <Button variant="contained" color="primary" onClick={()=>{navigate('/userPage')}}>
        Start Interview
      </Button>
      :
      <Button variant="contained" color='info'  disabled>
        Pending ...
      </Button>
    }

    <Button onClick={handleClearLocalStorage} variant='contained' color='error'>Clear Storage</Button>
    </div>
    </div>
  )
}


// import React, { useState, useEffect, useRef } from "react";
// import VideoRecorder from "react-video-recorder";

// const Home = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [thinkTime, setThinkTime] = useState(5);
//   const [recordingDuration, setRecordingDuration] = useState(0);
//   const [timerId, setTimerId] = useState(null);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (isRecording) {
//       const intervalId = setInterval(() => {
//         setRecordingDuration((prevDuration) => prevDuration + 1);
//       }, 1000);
//       setTimerId(intervalId);
//       setThinkTime(0);
//     } else {
//       clearInterval(timerId);
//       setTimerId(null);
//       setRecordingDuration(0);
//       setThinkTime(5);
//     }
//   }, [isRecording]);

//   const handleStartRecording = () => {
//     setIsRecording(true);
//   };

//   const handleStopRecording = () => {
//     setIsRecording(false);
//     videoRef.current.stopRecording();
//   };

//   const handleVideoRecordingComplete = (videoBlob) => {
//     console.log(videoBlob);
//   };

//   return (
//     <div>
//       <h1>React Video Recorder</h1>
//       <p>Think Time: {thinkTime}</p>
//       <p>Recording Duration: {recordingDuration}</p>
//       <VideoRecorder
//         onRecordingComplete={handleVideoRecordingComplete}
//         ref={videoRef}
//         renderAction={({
//           isRecording,
//           isCameraOn,
//           startRecording,
//           stopRecording,
//           mediaBlobUrl,
//           deleteVideo,
//         }) => (
//           <>
//             {!isRecording && (
//               <button onClick={handleStartRecording}>Start Recording</button>
//             )}
//             {isRecording && (
//               <button onClick={handleStopRecording}>Stop Recording</button>
//             )}
//             {mediaBlobUrl && (
//               <video controls src={mediaBlobUrl} width="320" height="240" />
//             )}
//           </>
//         )}
//       />
//     </div>
//   );
// };


export default Home;
