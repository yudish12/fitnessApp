import { Box,Typography } from '@mui/material'
import React,{ useContext }  from 'react'
import BodyPart from './BodyPart'
import {ScrollMenu,VisibilityContext} from 'react-horizontal-scrolling-menu';

// const LeftArrowIcon = "../left-arrow.png";
// const RightArrowIcon = "../right-arrow.png"

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
      <img src="../left-arrow.png" alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="right-arrow">
      <img src="../right-arrow.png" alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({data,bodypart,setBodypart}) => {
  return (
    <ScrollMenu sx={{width:'50%'}} LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item)=>(
       <Box className='scroll-box'  key={item.id||item}
       itemId={item.id || item}
       title={item.id||item}
       m="0 -20px"
       >
       <BodyPart item={item} bodyPart={bodypart}
        setBodypart={setBodypart}
       />
       </Box> 
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar
