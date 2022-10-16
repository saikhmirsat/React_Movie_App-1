import React from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../Components/Fetch'
import SliderMovie from '../Components/SliderMovie'
import MovieCardDetail from '../Components/MovieCardDetail'
import MovieGrid from '../Components/MovieGrid'

export default function DetailPage() {
  const [obj, setObj] = React.useState({})
  const { detailpage } = useParams()
  // console.log(detailpage)

  React.useEffect(() => {
    getData(`https://radiant-inlet-76290.herokuapp.com/movies/${detailpage}`)
      .then((res) => setObj(res))
  })

  return (
    <div>

      <MovieCardDetail backdrop_path={obj.backdrop_path} original_name={obj.original_name} overview={obj.overview} original_language={obj.original_language} vote_average={obj.vote_average} popularity={obj.popularity} origin_country={obj.origin_country} />
      <SliderMovie />
      <MovieGrid />
    </div>
  )
}
