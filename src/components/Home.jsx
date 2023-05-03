import React from 'react'
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const interviewState = useSelector((state)=>state.interview);
  const navigate = useNavigate();
  console.log(interviewState.isStart);
  return (
    <>
    <div>
        <h1>
            Time's Pro Interview App    
        </h1>
    </div>
    {
      interviewState.isStart === false
      ?
      <Button variant="contained" color="primary" onClick={()=>{navigate('/userPage')}}>
        Start Interview
      </Button>
      :
      <Button variant="outlined" color="secondary" disabled>
        Pending ...
      </Button>
    }
    </>
  )
}

export default Home;