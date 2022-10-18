import React from 'react'
import { getData } from '../Components/Fetch'
import MovieCard from '../Components/MovieCard'



export default function MovieGrid() {
    const [arr, setArr] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        setLoading(true)
        getData(`https://radiant-inlet-76290.herokuapp.com/movies/?_page=6`).then((res) => {
            setArr(res)
            setLoading(false)
        })
    }
    return (
        <div >
            <div>
                {
                    loading && <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />
                }
            </div>

            <div className='movie-card-mainbox' >

                {
                    arr.map((ele) => <MovieCard key={ele.id} original_name={ele.original_name} poster_path={ele.poster_path} AboutMore={ele.id} />)
                }
            </div>
        </div>
    )
}
