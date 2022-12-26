import React,{useEffect,useState} from 'react'
import {Box,Typography} from '@mui/material'
import Detail from './Detail'
import SimillarExercise from './SimilarExercise'
import ExerciseVideos from './ExerciseVideos';
import {useParams} from 'react-router-dom'
import { ExerciseOptions,fetchData } from '../Api/fetchData'
const ExerciseDetail = () => {
  const {id} = useParams();
  const [exerciseDetail,setExerciseDetail] = useState({});
  useEffect(()=>{
    const fetchExercisesData = async ()=>{
       const exercisedbURL = 'https://exercisedb.p.rapidapi.com'
       const youtubeSearchURL = 'https://youtube-search-and-download.p.rapidapi.com' 
       const exerciseDetailData = await fetchData(`${exercisedbURL}/exercises/exercise/${id}`,ExerciseOptions);
       console.log(exerciseDetailData);
       setExerciseDetail(exerciseDetailData);
    }
    fetchExercisesData();
  },[id]);
  return (
    <div>
      <Detail exerciseDetail={exerciseDetail}/>
    </div>
  )
}

export default ExerciseDetail
