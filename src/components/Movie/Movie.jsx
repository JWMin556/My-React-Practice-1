import React from 'react';
import { MovieContainer, MovieInfo, MovieImage } from './Movie.style'; 

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({title, poster_path, vote_average}){
    return(
        <MovieContainer>
            <MovieImage src={IMG_BASE_URL + poster_path} alt="영화포스터" />
            <MovieInfo>
                <h4>{title}</h4>
                <span>{vote_average}</span>
            </MovieInfo>
        </MovieContainer>
    )
}




/* 기존의 3주차 실습
import React from 'react'

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({title, poster_path, vote_average}){
    return(
        <div className='movie-container'>
            <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
            <div className='movie-info'>
                <h4>{title}</h4>
                <span>{vote_average}</span>
                
            </div>
        </div>
    )
}
*/

/*
import React, { useState } from 'react';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({ title, poster_path, vote_average, overview }) {
  const [showOverview, setShowOverview] = useState(false);

  const handleMouseEnter = () => {
    setShowOverview(true);
  }

  const handleMouseLeave = () => {
    setShowOverview(false);
  }

  return (
    <div className='movie-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
      <div className='movie-info'>
        <h4>{title}</h4>
        <span>{vote_average}</span>
        {showOverview && <p>{overview}</p>}
      </div>
    </div>
  )
}
*/

/*
import React, { useState } from 'react';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({ title, poster_path, vote_average, overview }) {
  const [showOverview, setShowOverview] = useState(false);

  const handleMouseEnter = () => {
    setShowOverview(true);
  }

  const handleMouseLeave = () => {
    setShowOverview(false);
  }

  return (
    <div className='movie-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
      <div className={`movie-info ${showOverview ? 'show' : ''}`}>
        <h4>{title}</h4>
        <span>{vote_average}</span>
        <p>{overview}</p>
      </div>
    </div>
  )
}
*/