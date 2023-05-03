import React, { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { ReactVideoRecorder } from "react-video-recorder";
import VideoRecorder from "react-video-recorder";
import { useModal, Modal } from "react-morphing-modal";
// import "./react-tabs.scss";
import "./QuestionPage.scss";
import { useEffect } from "react";
// import "./react-modal-custom.scss"; 
import { useDispatch, useSelector } from "react-redux";
import { setSelectedQuestion } from "../redux/actions/interviewActions";
import { Button } from "@mui/material";

const QuestionPage = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userTimeLimit, setUserTimeLimit] = useState(30000);
  const [userCountDown, setUserCountDown] = useState(3000);
  const [counter, setCounter] = React.useState(60);
  const question = useSelector((state) => state.question.question);
  const dispatch = useDispatch();

  const { modalProps, getTriggerProps } = useModal({});

  const setNextQuestion = () => {
    
    setQuestionIndex(questionIndex + 1);
    dispatch(setSelectedQuestion(questionIndex + 1));
  };

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div style={{display:'flex', backgroundColor:'aliceblue', border:'2px solid black', padding:'2px'}}>
      <div className="VideoandControlls">
      <div  style={{height:'70vh', width:'60vw'}}>
            <VideoRecorder
              countdownTime={userCountDown}
              timeLimit={userTimeLimit}
              showReplayControls={true}
              renderDisconnectedView={() => <div></div>}
              replayVideoAutoplayAndLoopOff={true}
            />
            {/* <button {...getTriggerProps()}></button> */}
          </div>
          <div style={{height:'8  vh', width:'58vw', border:'2px solid black',marginTop:'10px', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px'}}>
            <div>Retake :<br></br>Unlimited</div>
            <div>ThinkTime: {counter}</div>
          <div>Duration: {counter}</div>
          </div>
      </div>
      <div className="rightSide" style={{height:'70vh', width:'40vw', display:'flex', 
      flexDirection:'column', alignItems:'center'}}>
        <h1>Questions</h1>
      <div className="question">Q1 {question}</div>
      <div style={{paddingTop:'350px'}}>
        {/* <button style={{marginRight:'20px'}}>Retake</button> */}
        <Button style={{marginRight:'20px'}} variant='contained' color='error'>Retake</Button>
        <Button style={{marginLeft:'20px'}} variant='contained' color='error' onClick={setNextQuestion}>Save & Next</Button>
      </div>
      </div>
    </div>
  );
};

export default QuestionPage;