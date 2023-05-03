// import React from 'react'
// import Button from '@mui/material/Button'
// import { useSelector } from 'react-redux'
// import { startInterview } from '../redux/actions/interviewActions';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const interviewState = useSelector((state)=>state.interview);
//   const navigate = useNavigate();
//   console.log(interviewState.isStart);
//   return (
//     <>
//     <div>
//         <h1>
//             Time's Pro Interview App    
//         </h1>
//     </div>
//     {
//       interviewState.isStart === false
//       ?
//       <Button variant="contained" color="primary" onClick={()=>{navigate('/userPage')}}>
//         Start Interview
//       </Button>
//       :
//       <Button variant="outlined" color="secondary" disabled>
//         Pending ...
//       </Button>
//     }
//     </>
//   )
// }

// export default Home;

// import React, { useState, useEffect } from 'react';

// function CountdownTimer() {
//   const [timeLeft, setTimeLeft] = useState(10); // Set initial time to 10 seconds
//   const [timerRunning, setTimerRunning] = useState(false); // Set initial timerRunning state to false

//   useEffect(() => {
//     let timerId;

//     if (timerRunning && timeLeft > 0) {
//       timerId = setInterval(() => {
//         setTimeLeft(timeLeft => timeLeft - 1);
//       }, 1000);
//     }

//     return () => {
//       clearInterval(timerId);
//     };
//   }, [timerRunning, timeLeft]);

//   const Home = () => {
//     setTimerRunning(true);
//   };

//   return (
//     <div>
//       <div>{timeLeft}</div>
//       <button onClick={handleStart}>Start</button>
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';

// function Home() {
//   const [recordingState, setRecordingState] = useState({
//     isRecording: false,
//     thinkTime: 0,
//     durationTime: 0,
//   });

//   const handleStartRecording = () => {
//     console.log(recordingState.isRecording)
//     setRecordingState(prevState => ({
//       ...prevState,
//       isRecording: true,
//     }));
//   };

//   useEffect(() => {
//     let thinkTimerId;
//     let durationTimerId;

//     if (recordingState.isRecording) {
//       thinkTimerId = setTimeout(() => {
//         setRecordingState(prevState => ({
//           ...prevState,
//           thinkTime: 5, // Set the think time to 5 seconds
//         }));
//       }, 3000); // Start the think time after 3 seconds

//       durationTimerId = setTimeout(() => {
//         setRecordingState(prevState => ({
//           ...prevState,
//           durationTime: 30, // Set the duration time to 30 seconds
//         }));
//       }, 8000); // Start the duration time after 8 seconds
//     }

//     return () => {
//       clearTimeout(thinkTimerId);
//       clearTimeout(durationTimerId);
//     };
//   }, [recordingState.isRecording]);

//   return (
//     <div>
//       <div>Think time: {recordingState.thinkTime}</div>
//       <div>Duration time: {recordingState.durationTime}</div>
//       <button onClick={handleStartRecording}>Start recording</button>
//     </div>
//   );
// }

// export default Home;



// import React, { useState, useEffect } from 'react';

// function Home() {
//   const [timer, setTimer] = useState(0);
//   const [isRecording, setIsRecording] = useState(false);

//   const handleCameraClick = () => {
//     setIsRecording(true);
//   };

//   useEffect(() => {
//     let intervalId;

//     if (isRecording) {
//       setTimer(10); // Set the initial time to 10 seconds
//       intervalId = setInterval(() => {
//         setTimer(prevTimer => prevTimer - 1);
//       }, 1000);
//     }

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [isRecording]);

//   return (
//     <div>
//       <video id="camera-preview"></video>
//       <button onClick={handleCameraClick}>Record</button>
//       {isRecording && <div>Time left: {timer}</div>}
//     </div>
//   );
// }

// export default Home;


import React, { useState } from 'react';

function Home() {
  const [data, setData] = useState([
    { id: 1, name: 'John', status: 'active' },
    { id: 2, name: 'Mary', status: 'inactive' },
    { id: 3, name: 'Bob', status: 'active' },
  ]);

  const handleRemoveItem = (itemId, key) => {
    console.log(key)
    const newData = data.filter((item) => item.id !== itemId);
    setData(newData);
    // Update the status of the removed item here if needed
  };

  return (
    <div>
      <ul>
        {data.map((item,ind) => (
          <li key={item.id}>
            {item.name} - {item.status}
            <button onClick={() => handleRemoveItem(item.id, ind)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
