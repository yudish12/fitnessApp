import React from 'react'
import { Typography,Box,Stack, Button } from '@mui/material'
const absImg = 'https://raw.githubusercontent.com/adrianhajdin/project_fitness_app/main/src/assets/icons/body-part.png';
const dumbells = 'https://raw.githubusercontent.com/adrianhajdin/project_fitness_app/main/src/assets/icons/equipment.png';
const biceps = 'https://raw.githubusercontent.com/adrianhajdin/project_fitness_app/main/src/assets/icons/target.png'; 
const Detail = ({exerciseDetail}) => {
  const {bodyPart,gifUrl,name,target,equipment}= exerciseDetail;
  const detailArray = [
    {
      icon:absImg,
      name:"Six packs Abs"
    },
    {
      icon:dumbells,
      name: " Dumbells",
    },
    {
      icon:biceps,
      name:"Biceps"
    }
  ]
  return (
    <Stack gap={"60px"} sx={{flexDirection:{lg:'row'},p:' 20px',alignItems:'center',ml:"-35rem",mt:"3rem"}}>
      <img src={gifUrl} alt="name" loading="lazy"/> 
      <Stack sx={{gap:{lg:'35px',xs:'220px'},flexBasis:"20%"}}>
        <Typography width={"600px"} variant='h3'>
          {name}
        </Typography>
        <Typography variant='h6' width={"600px"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae ipsam voluptates nulla, iure expedita fuga distinctio aut nisi architecto quibusdam rerum sunt modi numquam consectetur eos consequuntur, praesentium iste. Quidem quis odit ipsam, dolorem eos aspernatur minus tempore ratione nesciunt eius nostrum, atque aliquid numquam, consequuntur rerum obcaecati cumque.
        </Typography>
      </Stack>
      <Stack gap={"30px"}>
      {detailArray.map((e,i)=>
      <Stack key={i} gap="30px" direction={"row"}>
       <Button sx={{background:"#fff2db",borderRadius:'50%',width:'100px',height:'100px'}}>
        <img src={e.icon}  alt={e.name} style={{width:'50px',height:'50px'}} />
       </Button>
       <Typography fontSize={"15px"}>
        {e.name}
       </Typography>
      </Stack>
      )}
      </Stack>
    </Stack>
  )
}

export default Detail
