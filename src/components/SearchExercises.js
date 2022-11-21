import React,{useState,useEffect} from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material';
import { exerciseOptions,fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar'

export default function SearchExercises({setExercises,bodyPart,setBodyPart}) {
  //useState Hooks
  const [search,setSearch] = useState('')
  const [bodyParts,setBodyParts ] = useState([])

  //useEffect Hook
  useEffect(()=>{
    const fetchExercisesData = async() => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
      setBodyParts(['all',...bodyPartsData])
    }
    fetchExercisesData()
    console.log(bodyParts)
  },[])

  //Search Function
  const handleSearch = async () => {
    if(search){
      const exercisesdata = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions) ;
      console.log(exercisesdata)

      const searchedExercises = exercisesdata.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        ||  exercise.target.toLowerCase().includes(search)
        ||  exercise.equipment.toLowerCase().includes(search)
        ||  exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch('')
      setExercises(searchedExercises)
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">

      <Typography fontWeight={700} mb="50px" textAlign="center"
      sx=
      {
        {
          fontSize:{lg:'44px',xs:'30px'}
        }
      }
      >Awesome Exercises you <br/>should know</Typography>

      <Box position="relative" mb="72px">

        <TextField
          height="75px"
          value= {search}
          onChange={(e)=>{
            // console.log(e);
            // console.log(e.target)
            // console.log(e.target.value)
            // console.log(e.target.type)

            setSearch(e.target.value.toLowerCase())
          }}
          placeholder="Search Exercises"
          type="text"
          sx=
          {
            {
              width:{lg:'800px',xs:'350px'},
              background:'#fff',
              borderRadius:'40px',
              input:
              {
                fontWeight:"700",
                border:'none',
                borderRadius:'4px'
              }
            }
          }
        />

        <Button className='search-btn'
          onClick={handleSearch}
          sx=
          {
            {
              bgcolor:'#ff2625',
              color:"#fff",
              textTransform:'none',
              width:{lg:'175px',xs:'80px'},
              fontSize:{lg:'20px',xs:'14px'},
              height:'56px',
              position:"absolute"
            }
          }
          >Search</Button>

      </Box>
      <Box
      sx=
        {
          {
            position:"relative",width:"100%",p:'20px'
          }
        }
        >
          <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>

    </Stack>

  )
}
