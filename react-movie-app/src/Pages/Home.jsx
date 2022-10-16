import React from 'react'
import { ImageSlider } from '../Components/ImageSlider'
import MovieGrid from '../Components/MovieGrid'
import SliderMovie from '../Components/SliderMovie'



export default function Home() {
  return (
    <div>
      <ImageSlider />
      <SliderMovie />
      <MovieGrid />
    </div>
  )
}
