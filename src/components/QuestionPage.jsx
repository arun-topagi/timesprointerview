import React, { useState } from "react";
import VideoRecorder from "react-video-recorder";
import "./QuestionPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeInterviewStatus, setSelectedQuestion } from "../redux/actions/interviewActions";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const QuestionPage = () => {
  const navigate = useNavigate();

  const [userTimeLimit, setUserTimeLimit] = useState(30000);
  const [userCountDown, setUserCountDown] = useState(3000);
  const [counter, setCounter] = React.useState(60);
  //questions from reducer
  const question = useSelector((state) => state.question);
  const interviewState = useSelector((state)=>state.interview);
  const queIndex = question.index;
  const dispatch = useDispatch();

  // const { modalProps, getTriggerProps } = useModal({});

  const setNextQuestion = () => {
    window.location.reload(false);
    dispatch(setSelectedQuestion(queIndex + 1));
  };
  const handleInterviewState =()=>{
    dispatch(changeInterviewStatus());
  }
  const retake = () =>{
    window.location.reload(false);
  }


  return (
    <div style={{display:'flex', backgroundColor:'aliceblue', border:'2px solid black', padding:'2px'}}>
      <div className="VideoandControlls">
      <div  style={{height:'70vh', width:'60vw'}}>
            <VideoRecorder
            isOnInitially={true}  
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
      <div className="question">Q{queIndex+1} {question.question[queIndex]}</div>
      <div style={{paddingTop:'350px'}}>
        {/* <button style={{marginRight:'20px'}}>Retake</button> */}
        <Button style={{marginRight:'20px'}} variant='contained' color='error' onClick={retake}>Retake</Button>
        {
          (question.question[queIndex+1]===undefined)
          ?
          <Button style={{marginLeft:'20px'}} variant='contained' color='success' onClick={()=>{navigate('/');handleInterviewState()}}>Submit</Button>
          :
          <Button style={{marginLeft:'20px'}} variant='contained' color='error' onClick={setNextQuestion}>Save & Next</Button>
        }
      </div>
      </div>
    </div>
  );
};

export default QuestionPage;