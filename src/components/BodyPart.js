import React from 'react'
import {Stack,Typography} from '@mui/material'
import Icon from '../assests/icons/gym.png'

export default function BodyPart({item,setBodyPart,bodyPart}) {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
          borderTop: bodyPart === item ?'4px solid #ff2625':'',
          backgroundColor: '#fff',
          borderBottomLeftRadius:'20px',
          width:'270px',
          height:'280px',
          cursor:'pointer',
          gap:'47px'
      }

    }
    onClick={()=>{
      setBodyPart(item);
      window.scrollTo({top:1800,left:100,behaviour:"smooth"})
    }}
    >
      <img src={Icon} alt="Dumbell" width="40px" height="40px"/>
      <Typography fontSize={24} fontWeight="bold" color="#e3a1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}
