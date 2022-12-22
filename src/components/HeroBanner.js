import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
const HeroBanner = () => {
    const HeroBannerImage = 'https://raw.githubusercontent.com/adrianhajdin/project_fitness_app/main/src/assets/images/banner.png';
  return (
    <Box sx={{
        mt:{lg:'120px',xs:'70px'},
        ml:{sm:'-33rem'}
    }}
    position="relative" p="20px"
    display={"flex"}
    flexDirection="row"
    >
    <Stack>
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.2', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    </Stack>
    <Stack style={{margin:"-20rem 0 0 -8rem"}}>
    <img src={HeroBannerImage} alt="hero-banner" />
    </Stack>
    </Box>
  )
}

export default HeroBanner
