import React from 'react'
import {Box,Typography,Button} from '@mui/material'
import HeroBannerImage from '../assests/images/banner.png'

export default function HeroBanner() {
  return (
    <Box position="relative" p="20px"
      sx=
      {
        {
          mt:{lg:"212px",xs:"70px"},ml:{sm:"50px"}
        }
      }
      >

      <Typography color="#FF2625" fontSize="26px" fontWeight={600}>Fitness Club</Typography>

      <Typography fontWeight={700} mb="23px" mt="30px"
        sx=
        {
          {
            fontSize:{lg:"44px",xs:"40px"}
          }
        }
      >Sweat, Smile <br/> and Repeat</Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={5}>Check out the most effective exercices</Typography>

      <Button variant='contained' color="error" sx={{padding:"15px"}}>Explore Exercise</Button>

      <Typography
        fontWeight={600}
        color="#ff2625"
        fontSize="200PX"
        sx=
        {
          {
            opacity:0.1,
            display:{lg:"block",xs:'none'}
          }
        }

      >Exercises</Typography>

      <img src={HeroBannerImage} alt="HeroBannerImage" className="hero-banner-img"/>

    </Box>
  )
}

