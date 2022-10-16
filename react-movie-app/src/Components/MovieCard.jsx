import React from 'react'
import { Link } from 'react-router-dom'
export default function MovieCard({ poster_path, original_name, id, AboutMore }) {
  const MoreDetail = `/movies/${AboutMore}`
  return (
    <div className='movie-card'>
      <img src={poster_path} alt={original_name} />
      <h2>{original_name}</h2>
      <div className='about-box'>
        <Link to={MoreDetail} className='about'>About More</Link>
      </div>
    </div>
  )
}
