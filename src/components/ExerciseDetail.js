import React,{useEffect,useState} from 'react'
import {Box,Typography} from '@mui/material'
import Detail from './Detail'
import SimillarExercise from './SimilarExercise'
import ExerciseVideos from './ExerciseVideos';
import {useParams} from 'react-router-dom'
import { ExerciseOptions,fetchData,youtubeOptions } from '../Api/fetchData'
const ExerciseDetail = () => {
  const {id} = useParams();
  const [exerciseDetail,setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  useEffect(()=>{
    const fetchExercisesData = async ()=>{
       const exercisedbURL = 'https://exercisedb.p.rapidapi.com'
       const youtubeSearchURL = 'https://youtube-search-and-download.p.rapidapi.com' 
       
       const exerciseDetailData = await fetchData(`${exercisedbURL}/exercises/exercise/${id}`,ExerciseOptions);
       console.log(exerciseDetailData);
       setExerciseDetail(exerciseDetailData);

       const exerciseVideosData = await fetchData(`${youtubeSearchURL}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exercisedbURL}/exercises/target/${exerciseDetailData.target}`, ExerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exercisedbURL}/exercises/equipment/${exerciseDetailData.equipment}`, ExerciseOptions);
      setEquipmentExercises(equimentExercisesData);
      console.log(exerciseVideosData)
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
