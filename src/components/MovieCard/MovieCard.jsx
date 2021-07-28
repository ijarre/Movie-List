import { Box, Center, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
  return (
    <Link to={props.link}>
      <Box
        bg="white"
        w="20em"
        borderRadius="10px"
        p={4}
        border="2.5px solid #161616"
        boxShadow="rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
        m={3}
      >
        <Text fontSize="2rem" textAlign="center" fontWeight="700" my={2}>
          {props.title}
        </Text>
        <Text fontStyle="italic" fontSize="1rem" my={2}>
          {props.tagline}
        </Text>
        <Text align="end">{`${props.vote_average}/10`}</Text>
      </Box>
    </Link>
  )
}

export default MovieCard
