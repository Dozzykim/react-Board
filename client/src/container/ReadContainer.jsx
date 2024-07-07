import React, { useEffect, useState } from 'react'
import Read from '../components/Read'
import * as boards from '../apis/boards';

const ReadContainer = ({no}) => {

  const [board, setBoard] = useState({});

  const getBoard = async() => {
    const response = await boards.select(no);
    const data = response.data;
    setBoard(data)
  }
  
  useEffect(() => {
    getBoard();
  }, [])

  return (
    <>
        <Read board={board}/>
    </>
  )
}

export default ReadContainer