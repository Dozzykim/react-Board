import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <h1>개인프로젝트 - 게시판 제작</h1>
        <h3>김도희</h3>

        <button>
            <Link to={`/boards`} >게시판으로 ...</Link>
        </button>
    </>
  )
}

export default Home