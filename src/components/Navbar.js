import React from 'react'
import { Stack } from '@mui/system'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <Stack direction="row" spacing={8} justifyContent="space-around" margin="0 0 0 -46rem">
        <Link to='/'><img src='https://i.pinimg.com/736x/88/f8/93/88f8934c8f2688c75caa39221b4cf4f0.jpg' alt='alt' style={{width:'150px',height:'160px',margin:'0 90px 0 0'}}/>
        </Link>
    <Stack direction="row" spacing={2}
    alignItems = "center"
    fontSize={"24px"}
    >
  <Link to="/" style={{color:"black",borderBottom:"3px solid #FF2625",marginLeft:"-20rem"}} >Item 1</Link>
  <Link to="/exercise/:id" style={{color:"black"}}>Item 2</Link>
</Stack>
</Stack>
  )
}

export default Navbar
