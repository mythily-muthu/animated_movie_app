import React from 'react'


const MovieCard = ({ movie }) => {
    return (
        <div>
            <h3>{movie.title}</h3>
            <img src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
                alt='' />

        </div>

    )
}

export default MovieCard