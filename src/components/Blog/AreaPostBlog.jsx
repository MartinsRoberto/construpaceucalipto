import React from 'react'
import { useParams } from 'react-router-dom';

const AreaPostBlog = () => {
  const { id } = useParams();
  console.log(useParams())

  console.log(id)

  return (
    <div>AreaPostBlog</div>
  )
}

export default AreaPostBlog