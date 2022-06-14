import React from 'react'
import { Box,Stack ,Typography } from '@mui/material'
import HorizontalScrollBar from "./HorizontalScrollBar"
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
    console.log({targetMuscleExercises})
  return (
    <Box sx={{mt:{lg:"100px",xs:"100px"}}}>
        <Typography mb={5} variant="h4">Exercises that target the same muscle group</Typography>
        <Stack direction="row" sx={{p:'2',position:"relative"}}>
            {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader /> }
        </Stack>
        <Typography mb={5} mt={5} variant="h4">Exercises that target the same Equipment </Typography>
        <Stack direction="row" sx={{p:'2',position:"relative"}}>
            {targetMuscleExercises.length ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader /> }
        </Stack>
    </Box>
  )
}

export default SimilarExercises