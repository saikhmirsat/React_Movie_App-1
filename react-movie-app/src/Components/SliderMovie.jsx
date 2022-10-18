
import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom'

let image = ['https://m.media-amazon.com/images/S/pv-target-images/584f855c26043d1029c7ad50bfe61a942fbb3491848c81c0b1815e0424403142._UR1920,1080_SX712_FMwebp_.jpg', 'https://m.media-amazon.com/images/S/pv-target-images/cb63b2bf1e1e4df8aeb7912fb5029a8a8e82a36e0c28f512199975f7a62ae112._UR1920,1080_SX712_FMwebp_.jpg', 'https://m.media-amazon.com/images/S/pv-target-images/5dd38bfcb734ff6eb1a9cd55bc78e4d1aa5abc7c2ba02128b87c7955d0c26e86._UR1920,1080_SX712_FMwebp_.jpg', 'https://m.media-amazon.com/images/S/pv-target-images/19f48cd9e735d12660f7f877b79b5d176a72d6d3f7bb6f7b7dd4eb750da679dd._UR1920,1080_SX712_FMwebp_.jpg', 'https://m.media-amazon.com/images/S/pv-target-images/05779626f2e0875744a9354e3b9c0d2fe30dd0914a29e19149258a95a0717aec._UR1920,1080_SX712_FMwebp_.jpg', 'https://m.media-amazon.com/images/S/pv-target-images/d856f42e28993d8a65c4339d7eadc7d33f54765c3f09798a1f21879581c440a1._UR1920,1080_SX712_FMwebp_.jpg']


export default function SliderMovie() {
    return <div className='slider2box' >
        <Link className='head-slid2' to="/movies"><h2 >Trending......</h2></Link>
        <Slide slidesToScroll={3} slidesToShow={5} indicators={true} autoplay={false} >
            {
                image.map((ele) => <div className='slider2' >
                    <img src={ele} alt="" />
                </div>)
            }
        </Slide>
    </div>
}

