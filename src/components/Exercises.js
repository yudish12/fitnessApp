import React,{useState} from 'react'
import { Pagination,Box,Stack,Typography } from '@mui/material'
import { ExerciseOptions,fetchData } from '../Api/fetchData'
// import ExerciseDetail from './ExerciseDetail'
import ExerciseCard from './ExerciseCard'
const Exercises = ({exercises,setExercises,bodyPart}) => {
  
  console.log(exercises);
  const [currentPage,setCurrentPage]=useState(1);
    const [exercisesPerPage,setExercisesPerPage]=useState(6);
    const indexOfLastEx = currentPage*exercisesPerPage;
    const indexOfFirstEx = indexOfLastEx-exercisesPerPage;
    const currentExercise = exercises.slice(indexOfFirstEx,indexOfLastEx); 
    const handleChange = (e,value)=>{
        setCurrentPage(value);
    }
  return (
    <Box id="exercises"
    sx={{mt:{lg:'110px'}}}
    ml="-28rem"
    width={"105rem"}
    p="20px"
    >
      <Typography variant='h3' ml="30rem" mb={"46px"}>
        Showing Results
      </Typography>
      <Stack  direction={"row"} sx={{gap:{lg:'110px',xs:'50px'},ml:'0px'}}
      flexWrap="wrap" justifyContent={"flexstart"}
      >
    {currentExercise.map((e,i)=>{
        return( 
          <ExerciseCard key={i} exercise={e}/>
        )
    })}
      </Stack>
      <Stack direction={"row"}
      sx={{ml:"30rem",mt:"2rem"}}
      >
      <Pagination count={10} page={currentPage}  onChange={handleChange}/>
      </Stack>
    </Box>
  )
}

export default Exercises
