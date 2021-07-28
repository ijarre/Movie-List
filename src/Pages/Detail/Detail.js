import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box, Container, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Detail = () => {
  const [movie, setMovie] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    const getMovieDetail = () => {
      axios.get(`/api/movies/${id}`).then((res) => {
        setMovie(res.data)
      })
    }
    getMovieDetail()
  }, [])
  console.log(movie)

  return (
    <>
      <Link to="/">
        <ArrowBackIcon w={6} h={6} />
      </Link>
      {movie && (
        <Container py={4} bg="gray.300" borderRadius="10px">
          <Box my={2}>
            <Text>Original Title: {movie[0].original_title}</Text>
          </Box>
          <Box my={2}>
            <Text>Overview: {movie[0].overview}</Text>
          </Box>
          <Box my={2}>
            <Text>Release Date: {movie[0].release_date}</Text>
          </Box>
          <Box my={2}>
            <Text>Runtime: {movie[0].runtime} m</Text>
          </Box>
          <Box my={2}>
            <Text>Status: {movie[0].status}</Text>
          </Box>
          <Box my={2}>
            <Text>Tagline: {movie[0].tagline}</Text>
          </Box>
          <Box my={2}>
            <Text>Title: {movie[0].title}</Text>
          </Box>
          <Box my={2}>
            <Text>Vote: {movie[0].vote_average}/10</Text>
          </Box>
          <Box my={2}>
            <Text>Vote Count: {movie[0].vote_count}</Text>
          </Box>
        </Container>
      )}
    </>
  )
}

export default Detail

// {
//     "id": 949,
//     "original_title": "Heat",
//     "overview": "Obsessive master thief, Neil McCauley leads a top-notch crew on various insane heists throughout Los Angeles while a mentally unstable detective, Vincent Hanna pursues him without rest. Each man recognizes and respects the ability and the dedication of the other even though they are aware their cat-and-mouse game may end in violence.",
//     "release_date": "15/12/95",
//     "runtime": 170,
//     "status": "Released",
//     "tagline": "A Los Angeles Crime Saga",
//     "title": "Heat",
//     "vote_average": 7.7,
//     "vote_count": 1886
//   }
