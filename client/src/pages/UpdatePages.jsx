import React from 'react'
import UpdateContainer from '../container/UpdateContainer';
import { useParams } from 'react-router-dom';

const UpdatePages = () => {

  const {no} = useParams();


  return (
    <>
    <div className="container">
        <UpdateContainer no={no}/>
    </div>
    </>
  )
}

export default UpdatePages