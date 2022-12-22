import React from 'react'
import { Stack,Typography } from '@mui/material'
const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
      <img src='https://www.shutterstock.com/image-vector/dumbbells-icon-isolated-on-white-260nw-1535864387.jpg' alt='dumbell' style={{width:'40px',height:'40px'}}/>
      <Typography>
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPart
