import React from 'react'
import { useParams } from 'react-router-dom'
function User() {

  const { userid } = useParams()
  return (
    <div className='text-center bg-gray-600 px-5 text-white m-4'>User : {userid}</div>
  )
}

export default User