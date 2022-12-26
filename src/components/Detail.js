import React from 'react'
import { Typography,Box,Stack } from '@mui/material'
const absImg = '../abs-vector-1.jpg';
const dumbells = '../567521.png';
const biceps = '../567521.png'; 
const Detail = ({exerciseDetail}) => {
  const {bodyPart,gifUrl,name,target,equipment}= exerciseDetail;
  return (
    <Stack gap={"60px"} sx={{flexDirection:{lg:'row'},p:' 20px',alignItems:'center'}}>
      <img src={gifUrl} alt="name" loading="lazy"/> 
      <Stack sx={{gap:{lg:'35px',xs:'220px'},width:"20%"}}>
        <Typography variant='h3'>
          {name}
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae ipsam voluptates nulla, iure expedita fuga distinctio aut nisi architecto quibusdam rerum sunt modi numquam consectetur eos consequuntur, praesentium iste. Quidem quis odit ipsam, dolorem eos aspernatur minus tempore ratione nesciunt eius nostrum, atque aliquid numquam, consequuntur rerum obcaecati cumque.
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Detail
