import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
        url: 'https://image.tmdb.org/t/p/w1280/sO2VWeJ8qagNtYoznyLRL8TeSkw.jpg',
        caption: 'Harry Potter',
        detail: "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths—and about the villain who's to blame."
    },
    {
        url: 'https://image.tmdb.org/t/p/w1280/7ABsaBkO1jA2psC8Hy4IDhkID4h.jpg',
        caption: 'Avatar',
        detail: "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization."
    },
    {
        url: 'https://image.tmdb.org/t/p/w1280/obKmfNexgL4ZP5cAmzdL4KbHHYX.jpg',
        caption: 'Movie name : Harry Potter and the Prisoner of Azkaban',
        detail: "Year three at Hogwarts means new fun and challenges as Harry learns the delicate art of approaching a Hippogriff, transforming shape-shifting Boggarts into hilarity and even turning back time. But the term also brings danger: soul-sucking Dementors hover over the school, an ally of the accursed He-Who-Cannot-Be-Named lurks within the castle walls, and fearsome wizard Sirius Black escapes Azkaban. And Harry will confront them all."
    },
    {
        url: 'https://image.tmdb.org/t/p/w1280/nR1KXRsOFIs3Vje2CW8T5qh5Q3h.jpg',
        caption: 'The Winchesters',
        detail: "Before Sam and Dean, there was John and Mary. Told from the perspective of narrator Dean Winchester, this is the epic, untold love story of how John met Mary, and how they put it all on the line to not only save their love, but the entire world."
    },
    {
        url: 'https://image.tmdb.org/t/p/w1280/sokTOq0zAmPS7wCR4qd4Kca35x7.jpg',
        caption: 'The Handmaid Tale',
        detail: "Set in a dystopian future, a woman is forced to live as a concubine under a fundamentalist theocratic dictatorship. A TV adaptation of Margaret Atwood's novel."
    },
    {
        url: 'https://image.tmdb.org/t/p/w1280/1rO4xoCo4Z5WubK0OwdVll3DPYo.jpg',
        caption: 'The Lord of the Rings: The Rings of Power',
        detail: "Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majestic forests of Lindon, to the breathtaking island kingdom of Númenor, to the furthest reaches of the map, these kingdoms and characters will carve out legacies that live on long after they are gone."
    },
    {
        url: 'https://image.tmdb.org/t/p/w1280/cDJ61O1STtbWNBwefuqVrRe3d7l.jpg',
        caption: 'Thor',
        detail: "Against his father Odin's will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth."
    },
    {
        url: 'https://image.tmdb.org/t/p/w1280/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg',
        caption: 'Thor',
        detail: "Against his father Odin's will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth."
    },
    {
        url: 'https://image.tmdb.org/t/p/w1280/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg',
        caption: 'Avatar: The Way of Water',
        detail: "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure."
    },
    {
        url: 'https://image.tmdb.org/t/p/w1280/uhYoytlNaq46dG81wLmHqaSuzWu.jpg',
        caption: 'Slide 10',
        detail: ""
    }
];

export const ImageSlider = () => {
    return (
        <div className="slide-container">
            <Slide scale={1}>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <div className='image' style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                            <div className='banner-text'>
                                <span>{slideImage.caption}</span><p>{slideImage.detail}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

