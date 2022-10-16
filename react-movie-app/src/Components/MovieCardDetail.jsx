import React from 'react'

export default function MovieCardDetail({ backdrop_path, original_name, overview, origin_country, original_language, vote_average, popularity }) {
  return (
    <div className='details'>
      <div className='child1'>
        <img src={backdrop_path} alt={original_name} />
      </div>
      <div className='child2'>
        <h1>Movie name : {original_name}</h1>
        <h4>{overview}</h4>
        <div className='con-lan-pop'>

          {
            origin_country && origin_country.map((ele) => <p key={ele}>Country : "{ele}"</p>)
          }

          <p>Lagnuage : "{original_language}"</p>
          <p>Popularity : {popularity}</p>
        </div>
        <div className='rating'>
          <p>Rating : {vote_average}/10</p>
          <div><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div>
        </div>
      </div>
    </div>
  )
}
