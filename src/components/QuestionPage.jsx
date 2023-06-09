import React, { useRef, useState, useEffect } from "react";
import VideoRecorder from "react-video-recorder";
import "./QuestionPage.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  changeInterviewStatus,
  setSelectedQuestion,
} from "../redux/actions/interviewActions";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const QuestionPage = () => {
  const navigate = useNavigate();

  const recorderRef = useRef(null);
  const [userTimeLimit, setUserTimeLimit] = useState(30000);
  const [userCountDown, setUserCountDown] = useState(3000);
  const [counter, setCounter] = React.useState(60);
  //questions from reducer
  const question = useSelector((state) => state.question);
  const interviewState = useSelector((state) => state.interview);
  const queIndex = question.index;
  const dispatch = useDispatch();
  const [flipped, isFlipped] = useState(true)

  // const { modalProps, getTriggerProps } = useModal({});
  const [star, isStar] = useState(true)

  const setNextQuestion = () => {
    window.location.reload(false);
    dispatch(setSelectedQuestion(queIndex + 1));
  };
  const handleInterviewState = () => {
    dispatch(changeInterviewStatus());
  };
  const retake = () => {
    window.location.reload(false);
  };


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



  const [videoSrc, setVideoSrc] = useState(null);
  const videoRef = useRef(null);
  const handleRecordingComplete = (videoBlob) => {
    const video = document.createElement('video');
    video.src = URL.createObjectURL(videoBlob);
    video.onloadedmetadata = () => {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.scale(1, -1); // Flip the video vertically
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const newSrc = canvas.toDataURL('video/mp4');
      setVideoSrc(newSrc);
    };
  };

  useEffect(() => {
    if (videoSrc !== null) {
      const video = document.getElementById('video');
      video.src = videoSrc;
    }
  }, [videoSrc]);



  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "aliceblue",
        border: "2px solid black",
        padding: "2px",
      }}
    >
      <div className="VideoandControlls">
        <div style={{ height: "70vh", width: "60vw" }}>
          <VideoRecorder
            isOnInitially={true}
            isRecording={true}
            isFlipped = {true}
            countdownTime={userCountDown}
            timeLimit={userTimeLimit}
            showReplayControls={true}
            disablePictureInPicture={true}
            renderDisconnectedView={() => <div>
            </div>}
            replayVideoAutoplayAndLoopOff={true}
            onStartRecording={() =>(setIsRecording(true)) }
            onRecordingComplete={() => setIsRecording(false)}
            ref={videoRef}

            />
          {/* <button {...getTriggerProps()}></button> */}
        </div>
        <div
          style={{
            height: "8  vh",
            width: "58vw",
            border: "2px solid black",
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <div>
            Retake :<br></br>Unlimited
          </div>
          <div>{isFirstCountdown?<p>ThinkTime:{count} seconds</p>:<p>ThinkTime:{0} seconds</p>}</div>
          <div>{isFirstCountdown ? <p> Doration: {30} seconds</p> : <p>Duration: {count} seconds</p>}</div>
        </div>
      </div>
      <div
        className="rightSide"
        style={{
          height: "70vh",
          width: "40vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Questions</h1>
        <div className="question">
          Q{queIndex + 1} {question.question[queIndex]}
        </div>
        <div style={{ paddingTop: "350px" }}>
          {/* <button style={{marginRight:'20px'}}>Retake</button> */}
          <Button
            style={{ marginRight: "20px" }}
            variant="contained"
            color="error"
            onClick={retake}
          >
            Retake
          </Button>
          {question.question[queIndex + 1] === undefined ? (
            <Button
              style={{ marginLeft: "20px" }}
              variant="contained"
              color="success"
              onClick={() => {
                navigate("/");
                handleInterviewState();
              }}
            >
              Submit
            </Button>
          ) : (
            <Button
              style={{ marginLeft: "20px" }}
              variant="contained"
              color="error"
              onClick={setNextQuestion}
            >
              Save & Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
