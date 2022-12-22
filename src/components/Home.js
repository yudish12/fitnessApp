import { Box } from '@mui/material';
import React, { useState } from 'react'
import Exercises from './Exercises';
import HeroBanner from './HeroBanner'
import SearchExercises from './SearchExercises'
const Home = () => {
  const [bodyPart,setBodyPart] = useState('all');
  const [exercises,setExercises] = useState([]);
  return (
    <>
    <Box sx={{ width: '100%' }}>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <div  sx={{ width: '100%' }}>
      <Exercises
       exercises={exercises}
       setExercises={setExercises}
       bodyPart={bodyPart}
      />
      </div>
      </Box>
    </>
  )
}

export default Home
