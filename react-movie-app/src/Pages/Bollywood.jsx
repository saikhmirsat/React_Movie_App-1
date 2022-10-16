import React from 'react'
import { getData } from '../Components/Fetch'
import MovieCard from '../Components/MovieCard'
import Pagination from '../Components/Pagination'

export default function Bollywood() {
  const [arr, setArr] = React.useState([])
  const [sort, setSort] = React.useState('')
  const [order, setOrder] = React.useState('')
  const [page, setPage] = React.useState(1)

  React.useEffect(() => {
    fetchData()
  }, [sort, order, page])

  const fetchData = () => {
    getData(`https://radiant-inlet-76290.herokuapp.com/movies/?_sort=${sort}&_order=${order}&_page=${page}&_limit=20`).then((res) => setArr(res))
  }

  console.log(sort)
  return (
    <div >
      <div className='filter'>
        <select onClick={(e) => setOrder(e.target.value)} >
          <option value="">Order</option>
          <option value="asc">Ascending</option>
          <option value="desc">Desendinf</option>
        </select>

        <select onClick={(e) => setSort(e.target.value)} >
          <option value="">Filter</option>
          <option value="original_name">Name</option>
          <option value="vote_average">Rating</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
      <div className='movie-card-mainbox'>
        {
          arr.map((ele) => <MovieCard key={ele.id} original_name={ele.original_name} poster_path={ele.poster_path} AboutMore={ele.id} />)
        }
      </div>
      <div >
        <Pagination current={page} onChange={(value) => setPage(value)} total={8} />
      </div>
    </div>
  )
}
