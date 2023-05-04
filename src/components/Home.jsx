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

export default Home;