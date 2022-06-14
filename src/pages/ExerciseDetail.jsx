import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from "@mui/material"

import { fetchData, exerciseOptions, youtubeOptions } from "../utils/fetchData"

import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import Loader from '../components/Loader'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setexerciseVideos] = useState([])

  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com"

      const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exercisevideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setexerciseVideos(exercisevideoData.contents)

      const targetMuscleExerciseData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
      setTargetMuscleExercises(targetMuscleExerciseData)

      const equipmentExercisesData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
      setEquipmentExercises(equipmentExercisesData)
    }
    fetchExerciseData()
  }, [id])

  return (
    <>
      {exerciseDetail.length === 0 ? <Loader /> : (
        <Box>
          <Detail exerciseDetail={exerciseDetail} />
          <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
          <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
        </Box>
      )}
    </>
  )
}

export default ExerciseDetail