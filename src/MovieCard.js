import React from 'react'


const MovieCard = ({ movies }) => {
    return (
        <div>
            <h3>{movies.title}</h3>
            <img src={'https://image.tmdb.org/t/p/w500' + movies.backdrop_path}
                alt='' />

        </div>

    )
}

export default MovieCard 