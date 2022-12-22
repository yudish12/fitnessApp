import React,{useState,useEffect} from 'react'
import {Box,Stack,Typography,TextField, Button } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar';
import { fetchData,ExerciseOptions } from '../Api/fetchData';
const SearchExercises = ({bodyPart,setBodyPart,exercises,setExercises}) => {
  const [search,setSearch] = useState('');
  const [bodyParts,setBodyParts] = useState([]);
  useEffect(()=>{
    const fetchExercisesData = async()=>{
      const bodyPartList = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',ExerciseOptions)
      setBodyParts(['all',...bodyPartList]);
    }
    fetchExercisesData();
  },[])
  
  const handleSearch = async ()=>{
     if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',ExerciseOptions);
      
      const searchedExercises = exerciseData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
      setExercises(searchedExercises);
      console.log(searchedExercises);
     }
  }
  return (
    <Stack width={'50rem'} alignItems="center" mt="37px" ml="-10rem" justifyContent="center" p="20px" >
      <Typography color={"#303234"} variant="h4" align='center'>
        Awesome Exercises<br/>   You Should Know
      </Typography>
      <Box position="relative"  mb="72px" display={"flex"}
      flexDirection="row"
      >
        <TextField
          height="76px"
          sx={{ input: {width:'1100px', fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1000px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '120px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '17px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{position:'relative',width:'100%',p:"20px"}}>
         <HorizontalScrollbar data={bodyParts} bodypart={bodyPart}
         setBodypart={setBodyPart}
         />
      </Box>
    </Stack>
  )
}

export default SearchExercises
