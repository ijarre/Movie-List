import { Stack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import MovieCard from '../MovieCard/MovieCard'

const MovieDisplay = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = () => {
      axios.get('/api/movies').then((res) => {
        setMovies(res.data)
      })
    }
    getMovies()
  }, [])

  console.log(movies)
  return (
    <>
      <div
        className="movie0"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        {movies.map((el) => {
          return (
            <MovieCard
              title={el.title}
              tagline={el.tagline}
              vote_average={el.vote_average}
              link={`/detail/${el.id}`}
            />
          )
        })}
      </div>
    </>
  )
}

export default MovieDisplay
