import React from 'react'
import ReadContainer from '../container/ReadContainer'
import { useParams } from 'react-router-dom'

const ReadPages = () => {

  const {no} = useParams();

  return (
    <>
      <ReadContainer no={no} />
    </>
  )
}

export default ReadPages